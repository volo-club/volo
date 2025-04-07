import * as React from "react"

export function useLandscape() {
  const [isLandscape, setIsLandscape] = React.useState<boolean>(false)

  React.useEffect(() => {
    const checkOrientation = () => {
      setIsLandscape(window.innerWidth > window.innerHeight && window.innerWidth < 1024)
    }
    
    // Check on mount
    checkOrientation()
    
    // Check on resize
    window.addEventListener("resize", checkOrientation)
    
    // Check on orientation change (for mobile devices)
    window.addEventListener("orientationchange", checkOrientation)
    
    return () => {
      window.removeEventListener("resize", checkOrientation)
      window.removeEventListener("orientationchange", checkOrientation)
    }
  }, [])

  return isLandscape
} 