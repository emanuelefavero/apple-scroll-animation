// FIRST APPLE-LIKE EFFECT:
// Sync video with scroll
const html = document.documentElement
const canvas = document.getElementById('hero-lightpass')
const context = canvas.getContext('2d')

const frameCount = 148
const currentFrame = (index) =>
  `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${index
    .toString()
    .padStart(4, '0')}.jpg`

const preloadImages = () => {
  for (let i = 1; i < frameCount; i++) {
    const img = new Image()
    img.src = currentFrame(i)
  }
}

const img = new Image()
img.src = currentFrame(1)
canvas.width = 1158
canvas.height = 770
img.onload = function () {
  context.drawImage(img, 0, 0)
}

const updateImage = (index) => {
  img.src = currentFrame(index)
  context.drawImage(img, 0, 0)
}

window.addEventListener('scroll', () => {
  const scrollTop = html.scrollTop
  const maxScrollTop = html.scrollHeight - window.innerHeight
  const scrollFraction = scrollTop / maxScrollTop
  const frameIndex = Math.min(
    frameCount - 1,
    Math.ceil(scrollFraction * frameCount)
  )

  requestAnimationFrame(() => updateImage(frameIndex + 1))
})

preloadImages()

// SECOND APPLE-LIKE EFFECT:
// Show element only if the has scrolled to the bottom of the page
const bottomPageElement = document.querySelector('.bottom-page-element')
window.onscroll = function (ev) {
  if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
    // you're at the bottom of the page
    console.log('Bottom of page')
    bottomPageElement.classList.add('show')
  } else {
    bottomPageElement.classList.remove('show')
  }
}
