function Footer() {
    
    const footerYear = new Date().getFullYear()

    return (
        <footer className="footer p-1 bg-gray-700 text-primary-content footer-center">
            <div className="div">
                <svg
                width='50'
                height='0'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
                fillRule='evenodd'
                clipRule='evenodd'
                className='inline-block fill-current'
            >
            </svg>
            <p className="text-xl">Workout Tracker</p>
          <p>Copyright &copy; {footerYear} All rights reserved</p>
            </div>
        </footer>
    )
    }

    export default Footer