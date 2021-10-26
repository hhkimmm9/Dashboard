<template>
  <div class="container">
    <h3>Lunch Picker</h3>

    <p>
      Enter the choice of yours for today's lunch separated by a comma.<br />
      Press enter when you are done. <br />
      Then I will decide what you gonna get today. :)
    </p>

    <textarea id="textarea" placeholder="Enter your choices here..."></textarea>

    <div id="tags"></div>
  </div>
</template>

<script>
export default {
  name: 'LunchPicker',
  mounted() {
    const textarea = document.getElementById('textarea')

    // As soon as a user lands at this component, they can type in rigth away.
    textarea.focus()

    // Add an event listener to the textare tag.
    textarea.addEventListener('keyup', (e) => {
      this.createTags(e.target.value)

      if (e.key === 'Enter') {
        setTimeout(() => {
          e.target.value = ''
        }, 10)

        this.randomSelect()
      }
    })
  },
  methods: {
    // Once the user types something into the textarea,
    // filter the length of zero string as a little validation,
    // then trim it. After that, make span elements with what the user typed
    // into the textarea. Put them into the div with the id of tags.

    createTags(input) {
      const tagsEl = document.getElementById('tags')

      const tags = input
        .split(',')
        .filter((tag) => tag.trim() !== '')
        .map((tag) => tag.trim())

      tagsEl.innerHTML = ''

      tags.forEach((tag) => {
        const tagEl = document.createElement('span')
        tagEl.classList.add('tag')
        tagEl.innerText = tag
        tagsEl.appendChild(tagEl)
      })
    },
    // First half is for the choosing animation.
    // Second half is to choose one final option.
    randomSelect() {
      const times = 30

      const interval = setInterval(() => {
        const randomTag = this.pickRandomTag()

        if (randomTag !== undefined) {
          this.highlightTag(randomTag)

          setTimeout(() => {
            this.unHighlightTag(randomTag)
          }, 100)
        }
      }, 100)

      setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
          const randomTag = this.pickRandomTag()

          this.highlightTag(randomTag)
        }, 100)
      }, times * 100)
    },
    pickRandomTag() {
      const tags = document.querySelectorAll('.tag')
      return tags[Math.floor(Math.random() * tags.length)]
    },
    highlightTag(tag) {
      tag.classList.add('highlight')
    },
    unHighlightTag(tag) {
      tag.classList.remove('highlight')
    },
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Muli&display=swap');

.container {
  font-family: 'Muli', sans-serif;
  background-color: #2b88f0;
  padding: 15px;

  /* width: 500px; */
}

h3 {
  color: #fff;
  /* margin: 10px 0 20px; */
  /* text-align: center; */
}

p {
  color: #fff;
}

textarea {
  border: none;
  display: block;
  width: 100%;
  height: 100px;
  font-family: inherit;
  padding: 10px;
  margin: 0 0 20px;
  font-size: 16px;
}

textarea:focus {
  outline: none;
}

.tag {
  background-color: #f0932b;
  color: #fff;
  border-radius: 50px;
  padding: 10px 20px;
  margin: 0 5px 10px 0;
  font-size: 14px;
  display: inline-block;
}

.tag.highlight {
  background-color: #273c75;
}
</style>
