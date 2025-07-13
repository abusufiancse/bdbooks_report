class AppUpdateInfographic {
  constructor() {
    this.animationStep = 0
    this.totalUpdates = 6
    this.init()
  }

  init() {
    this.startAnimation()
    this.setupIntersectionObserver()
  }

  startAnimation() {
    const animateStep = () => {
      if (this.animationStep < this.totalUpdates) {
        this.animateUpdateCard(this.animationStep)
        this.animateTimelineItem(this.animationStep)
        this.updateProgress()
        this.animationStep++

        setTimeout(animateStep, 300)
      }
    }

    // Start animation after a short delay
    setTimeout(animateStep, 500)
  }

  animateUpdateCard(index) {
    const cards = document.querySelectorAll(".update-card")
    if (cards[index]) {
      const delay = Number.parseInt(cards[index].dataset.delay) || 0
      setTimeout(() => {
        cards[index].classList.add("visible")
      }, delay)
    }
  }

  animateTimelineItem(index) {
    const items = document.querySelectorAll(".timeline-item")
    const icons = document.querySelectorAll(".timeline-icon")

    if (items[index]) {
      setTimeout(() => {
        items[index].classList.add("active")
        if (icons[index]) {
          icons[index].classList.add("active")
        }
      }, 200)
    }
  }

  updateProgress() {
    const progressFill = document.querySelector(".progress-fill")
    const progressPercentage = document.querySelector(".progress-percentage")

    const progress = ((this.animationStep + 1) / this.totalUpdates) * 100

    if (progressFill) {
      progressFill.style.width = `${progress}%`
    }

    if (progressPercentage) {
      progressPercentage.textContent = `${Math.round(progress)}%`
    }
  }

  setupIntersectionObserver() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in")
        }
      })
    }, observerOptions)

    // Observe timeline section for additional animations
    const timelineSection = document.querySelector(".timeline-section")
    if (timelineSection) {
      observer.observe(timelineSection)
    }
  }
}

// Utility functions for smooth scrolling and interactions
class UIEnhancements {
  constructor() {
    this.init()
  }

  init() {
    this.addHoverEffects()
    this.addClickAnimations()
    this.setupResponsiveAnimations()
  }

  addHoverEffects() {
    const cards = document.querySelectorAll(".update-card, .stat-card, .timeline-bubble")

    cards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-5px) scale(1.02)"
        card.style.boxShadow = "0 25px 50px rgba(0, 0, 0, 0.15)"
      })

      card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0) scale(1)"
        card.style.boxShadow = "0 20px 40px rgba(0, 0, 0, 0.1)"
      })
    })
  }

  addClickAnimations() {
    const clickableElements = document.querySelectorAll(".update-card, .stat-card")

    clickableElements.forEach((element) => {
      element.addEventListener("click", () => {
        element.style.transform = "scale(0.98)"
        setTimeout(() => {
          element.style.transform = "scale(1)"
        }, 150)
      })
    })
  }

  setupResponsiveAnimations() {
    // Add staggered animations for mobile
    const isMobile = window.innerWidth <= 768

    if (isMobile) {
      const cards = document.querySelectorAll(".update-card")
      cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 100}ms`
      })
    }
  }
}

// Counter animation for stats
class CounterAnimation {
  constructor() {
    this.setupCounters()
  }

  setupCounters() {
    const counters = [{ element: document.querySelector(".stat-number"), target: 6, suffix: "" }]

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.animateCounter(entry.target, 6, "")
        }
      })
    })

    const statsSection = document.querySelector(".stats-grid")
    if (statsSection) {
      observer.observe(statsSection)
    }
  }

  animateCounter(element, target, suffix) {
    let current = 0
    const increment = target / 30
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        current = target
        clearInterval(timer)
      }
      element.textContent = Math.floor(current) + suffix
    }, 50)
  }
}

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  new AppUpdateInfographic()
  new UIEnhancements()
  new CounterAnimation()

  // Add smooth scrolling for any anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })
})

// Add resize handler for responsive adjustments
window.addEventListener("resize", () => {
  // Recalculate animations on resize
  const isMobile = window.innerWidth <= 768
  const timelineItems = document.querySelectorAll(".timeline-item")

  timelineItems.forEach((item) => {
    if (isMobile) {
      item.style.flexDirection = "column"
    } else {
      item.style.flexDirection = "row"
    }
  })
})
