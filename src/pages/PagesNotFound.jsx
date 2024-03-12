import ico from "../assets/img/undraw_page_not_found.svg"

function PagesNotFound() {
  return (
    <div className='col-7 home-systems'>
      <section className="section-404">
        <figure className="section-404-figure">
          <img src={ico} alt='undraw page not found' />
        </figure>
        <p className="section-404-text">Seccion en desarrollo</p>
      </section>
    </div>
  )
}

export default PagesNotFound