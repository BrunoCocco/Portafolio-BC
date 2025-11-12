import './Component.css'

function Header() {
  return (
    <header className="container-fluid header-Fondo">
        <img className='header-img-fantasma' src="../src/assets/fantasma.png" alt="" />
     <div className='row'>
         <h2 className='col-md-4 mt-2'>Hoa mundo desde el Header</h2>
           <h2 className='col-md-4 mt-2 mb-3'>Hoa mundo desde el Header</h2>
             <h2 className='col-md-4 mt-2'>Hoa mundo desde el Header</h2>
     </div>
    </header>
  )
}

export default Header
