import React from 'react'

export const Sec1 = () => {
  return (
    <div>

<div id="carouselExampleDark" className="carousel carousel-dark slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <img src="https://img.freepik.com/free-vector/many-cute-animals-bamboo-forest_1308-32851.jpg?t=st=1714375661~exp=1714379261~hmac=c6cb551ddb859cc022e6f865a023bb02b8ca47d49bea34f840843161fe0bda4a&w=900" className="d-block w-100" alt="..." style={{height:'500px'}}/>
      <div className="carousel-caption d-none d-md-block text-light">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src="https://img.freepik.com/free-photo/cute-possum-studio_23-2150953359.jpg?t=st=1714375679~exp=1714379279~hmac=2e91df76dc1a1047c0f98ea4616ca391c87e0d3d4cc14678e827fca665733781&w=996" className="d-block w-100" alt=".." style={{height:'500px'}}/>
      <div className="carousel-caption d-none d-md-block text-light">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://img.freepik.com/free-photo/amazing-bengal-tiger-nature_475641-1137.jpg?t=st=1714375669~exp=1714379269~hmac=e61e1095ecab224d8416b45ccb98f59032dc03cab54e791f27081e980925833d&w=826" className="d-block w-100" alt="..." style={{height:'500px'}}/>
      <div className="carousel-caption d-none d-md-block text-light">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

    </div>
  )
}
