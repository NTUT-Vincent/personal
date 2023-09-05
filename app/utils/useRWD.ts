const useRWD = () => {
    if (typeof window !== 'undefined') {
        if (window.innerWidth < 640) {
            return 'mobile'
        }
    }
    return 'desktop'
}

export default useRWD