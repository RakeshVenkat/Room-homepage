console.log('Yes, I am invoked')
let val;
const heroCarouselData = [
    {
        "heading": "Discover innovative ways to decorate",
        "content": "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form andnfunction in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."
    },
    {
        "heading": "We are available all across the globe",
        "content": " With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
    },
    {
        "heading": "Manufactured with the best materials",
        "content": "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
    }
]
function onMenuClick(step) {
    const heroContentEl = document.querySelector('.hero-content')
    const headingEl = heroContentEl.querySelector('h3')
    const contentEl = heroContentEl.querySelector('p')

    if(step === 'R'){
        val = val === undefined ? 2 : (val) % 3 + 1;
    } else {
        val = val === undefined ? 3 : val === 1 ? 3: Math.abs(val - 1) % 3;
    }
    let heroCarouselDataIndex = val - 1
    headingEl.innerText=heroCarouselData[heroCarouselDataIndex].heading
    contentEl.innerText=heroCarouselData[heroCarouselDataIndex].content

    const heroImg = document.querySelector('.hero-img')
    heroImg.classList.value = `hero-img hero-img-${val}`

    console.log(`yet to be implemented!!${val}`)
}