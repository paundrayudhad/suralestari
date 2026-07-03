import { onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

export function useScrollReveal(selector = '[data-reveal]') {
  let ctx: gsap.Context

  onMounted(() => {
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger)
      
      // We use a small timeout to ensure DOM is fully parsed and other GSAP instances (like pinning) are initialized
      setTimeout(() => {
        ctx = gsap.context(() => {
          
          // 1. Section Transitions (Scale and Fade In)
          const sections = document.querySelectorAll('section')
          sections.forEach((sec) => {
            // Exclude the hero section (already has 3D particles) 
            // and the horizontal scroll section (scaling breaks GSAP pin calculations)
            if (sec.id === 'hero' || sec.id === 'destinasi-horizontal' || sec.id === 'preloader') return
            
            gsap.set(sec, { scale: 0.95, opacity: 0, y: 30 })
            gsap.to(sec, {
              scale: 1,
              opacity: 1,
              y: 0,
              duration: 1.5,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: sec,
                start: 'top 85%',
                once: true,
              }
            })
          })

          // 2. Split Text Reveal for all section headings (H2)
          const headings = document.querySelectorAll('section h2')
          
          function splitElement(el: Element) {
            if (el.querySelector('.reveal-word')) return
            
            const childNodes = Array.from(el.childNodes)
            el.innerHTML = ''
            
            childNodes.forEach((node) => {
              if (node.nodeType === 3) { // Text Node
                const text = node.textContent || ''
                // Split by spaces but preserve them in the array
                const tokens = text.split(/(\s+)/)
                tokens.forEach((token) => {
                  if (token.trim() === '') {
                    // Append raw spacing text node to prevent layout collapse
                    el.appendChild(document.createTextNode(token))
                  } else {
                    const wordSpan = document.createElement('span')
                    wordSpan.style.display = 'inline-block'
                    wordSpan.classList.add('reveal-word')
                    
                    const chars = token.split('')
                    chars.forEach((char) => {
                      const charSpan = document.createElement('span')
                      charSpan.style.display = 'inline-block'
                      charSpan.textContent = char
                      charSpan.classList.add('reveal-char')
                      wordSpan.appendChild(charSpan)
                    })
                    el.appendChild(wordSpan)
                  }
                })
              } else if (node.nodeType === 1) { // Element Node
                const clone = node.cloneNode(false) as Element
                el.appendChild(clone)
                splitElement(clone)
              } else {
                el.appendChild(node.cloneNode(true))
              }
            })
          }

          headings.forEach((heading) => {
            // Apply recursive splitting to keep formatting tags (e.g. <span>, <br>)
            splitElement(heading)

            const charSpans = heading.querySelectorAll('.reveal-char')
            
            if (heading.hasAttribute('data-reveal')) {
              heading.removeAttribute('data-reveal')
            }

            // Set initial state for characters (3D flip effect)
            gsap.set(charSpans, { y: 40, opacity: 0, rotateX: -90, transformOrigin: '0% 50% -50' })
            
            gsap.to(charSpans, {
              y: 0,
              opacity: 1,
              rotateX: 0,
              duration: 1,
              stagger: 0.02,
              ease: 'back.out(1.7)',
              scrollTrigger: {
                trigger: heading,
                start: 'top 85%',
                once: true,
              }
            })
          })

          // 3. Regular reveal elements (fade up)
          const els = document.querySelectorAll(selector)
          els.forEach((el) => {
            gsap.set(el, { y: 60, opacity: 0 })
            gsap.to(el, {
              y: 0,
              opacity: 1,
              duration: 1.2,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: el,
                start: 'top 85%',
                once: true,
              }
            })
          })

        })
      }, 100) // 100ms timeout ensures components are fully rendered
    }
  })

  onUnmounted(() => {
    if (ctx) {
      ctx.revert() 
    }
  })
}
