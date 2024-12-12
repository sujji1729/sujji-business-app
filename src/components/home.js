import React from 'react'
import Slider from 'react-slick';
import ReUseNavBar from '../reusecomponents/reUseNavBar'
import ReUseFooter from '../reusecomponents/reUseFooter'
import "../App.css"


const Home = () => {


    const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} custom-arrow custom-next`}
        style={{ ...style, display: 'block', background: 'black'}}
        onClick={onClick}
      />
    );
  };

  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} custom-arrow custom-prev`}
        style={{ ...style, display: 'block', background: 'black'}}
        onClick={onClick}
      />
    );
  };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
          {
            breakpoint: 1024, 
    
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    
      const carouselItems = [
        {
          imageSrc: "assets/img/vegetable-item-6.jpg",
          title: "Product 1",
          description: "This is a description of product 1.",
          price: "$19.99",
          category : "vegetables",
          addToCartLink: "/cart/add/1"
        },
        {
          imageSrc: "assets/img/vegetable-item-1.jpg",
          title: "Product 2",
          description: "This is a description of product 2.",
          price: "$29.99",
          category : "vegetables",
          addToCartLink: "/cart/add/2"
        },
        {
          imageSrc: "assets/img/vegetable-item-3.png",
          title: "Product 3",
          description: "This is a description of product 3.",
          price: "$39.99",
          category : "vegetables",
          addToCartLink: "/cart/add/3"
        }
      ];



      //client review

      const settings1 = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
          {
            breakpoint: 1024, 
    
            settings: {
              slidesToShow: 2,
              slidesToScroll:2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          { 
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };


      const client_review = [
        {
            client_img : "assets/img/testimonial-1.jpg",
            client_name : "client1",
            client_review : "client review 1",
            client_profession : "Profession1"
        },
        {
            client_img : "assets/img/testimonial-1.jpg",
            client_name : "client2",
            client_review : "client review 2",
            client_profession : "Profession2"
        }, {
            client_img : "assets/img/testimonial-1.jpg",
            client_name : "client3",
            client_review : "client review 3",
            client_profession : "Profession3"
        },
      ]





  return (
    <div>

{/* Spinner Start */}
        {/* <div id="spinner" className="show w-100 vh-100 bg-white position-fixed translate-middle top-50 start-50  d-flex align-items-center justify-content-center">
            <div className="spinner-grow text-primary" role="status"></div>
        </div> */}
        {/* Spinner End */}


      {/* navbar */}
       <ReUseNavBar />
       {/* navbar end */}


        {/* Hero Start */}
        <div className="container-fluid py-5 mb-5 hero-header">
            <div className="container py-5">
                <div className="row g-5 align-items-center">
                    <div className="col-md-12 col-lg-7">
                        <h4 className="mb-3 text-secondary">100% Organic Foods</h4>
                        <h1 className="mb-5 display-3 text-primary">Organic Veggies & Fruits Foods</h1>
                        <div className="position-relative mx-auto">
                            <input className="form-control border-2 border-secondary w-75 py-3 px-4 rounded-pill" type="number" placeholder="Search" />
                            <button type="submit" className="btn btn-primary border-2 border-secondary py-3 px-4 position-absolute rounded-pill text-white h-100" style={{top: "0", right: "25%"}}>Submit Now</button>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-5">
                        <div id="carouselId" className="carousel slide position-relative" data-bs-ride="carousel">
                            <div className="carousel-inner" role="listbox">
                                <div className="carousel-item active rounded">
                                    <img src="assets/img/hero-img-1.png" className="img-fluid w-100 h-100 bg-secondary rounded" alt="First slide" />
                                    <a href="#" className="btn px-4 py-2 text-white rounded">Fruites</a>
                                </div>
                                <div className="carousel-item rounded">
                                    <img src="assets/img/hero-img-2.jpg" className="img-fluid w-100 h-100 rounded" alt="Second slide" />
                                    <a href="#" className="btn px-4 py-2 text-white rounded">Vesitables</a>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Hero End */}


        {/* Featurs Section Start */}
        <div className="container-fluid featurs py-5">
            <div className="container py-5">
                <div className="row g-4">
                    <div className="col-md-6 col-lg-3">
                        <div className="featurs-item text-center rounded bg-light p-4">
                            <div className="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
                                <i className="fas fa-car-side fa-3x text-white"></i>
                            </div>
                            <div className="featurs-content text-center">
                                <h5>Free Shipping</h5>
                                <p className="mb-0">Free on order over $300</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="featurs-item text-center rounded bg-light p-4">
                            <div className="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
                                <i className="fas fa-user-shield fa-3x text-white"></i>
                            </div>
                            <div className="featurs-content text-center">
                                <h5>Security Payment</h5>
                                <p className="mb-0">100% security payment</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="featurs-item text-center rounded bg-light p-4">
                            <div className="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
                                <i className="fas fa-exchange-alt fa-3x text-white"></i>
                            </div>
                            <div className="featurs-content text-center">
                                <h5>30 Day Return</h5>
                                <p className="mb-0">30 day money guarantee</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="featurs-item text-center rounded bg-light p-4">
                            <div className="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
                                <i className="fa fa-phone-alt fa-3x text-white"></i>
                            </div>
                            <div className="featurs-content text-center">
                                <h5>24/7 Support</h5>
                                <p className="mb-0">Support every time fast</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Featurs Section End */}


        {/* Fruits Shop Start*/}
        <div className="container-fluid fruite py-5">
            <div className="container py-5">
                <div className="tab-className text-center">
                    <div className="row g-4">
                        <div className="col-lg-4 text-start">
                            <h1>Our Organic Products</h1>
                        </div>
                        <div className="col-lg-8 text-end">
                            <ul className="nav nav-pills d-inline-flex text-center mb-5">
                                <li className="nav-item">
                                    <a className="d-flex m-2 py-2 bg-light rounded-pill active" data-bs-toggle="pill" href="#tab-1">
                                        <span className="text-dark" style={{width: "130px"}}>All Products</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="d-flex py-2 m-2 bg-light rounded-pill" data-bs-toggle="pill" href="#tab-2">
                                        <span className="text-dark" style={{width: "130px"}}>Vegetables</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="d-flex m-2 py-2 bg-light rounded-pill" data-bs-toggle="pill" href="#tab-3">
                                        <span className="text-dark" style={{width: "130px"}}>Fruits</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="d-flex m-2 py-2 bg-light rounded-pill" data-bs-toggle="pill" href="#tab-4">
                                        <span className="text-dark" style={{width: "130px"}}>Bread</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="d-flex m-2 py-2 bg-light rounded-pill" data-bs-toggle="pill" href="#tab-5">
                                        <span className="text-dark" style={{width: "130px"}}>Meat</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="tab-content">
                        <div id="tab-1" className="tab-pane fade show p-0 active">
                            <div className="row g-4">
                                <div className="col-lg-12">
                                    <div className="row g-4">
                                        <div className="col-md-6 col-lg-4 col-xl-3">
                                            <div className="rounded position-relative fruite-item">
                                                <div className="fruite-img">
                                                    <img src="assets/img/fruite-item-5.jpg" className="img-fluid w-100 rounded-top" alt="" />
                                                </div>
                                                <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{top: "10px", left: "10px"}}>Fruits</div>
                                                <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                    <h4>Grapes</h4>
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                                    <div className="d-flex justify-content-between flex-lg-wrap">
                                                        <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                                                        <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-4 col-xl-3">
                                            <div className="rounded position-relative fruite-item">
                                                <div className="fruite-img">
                                                    <img src="assets/img/fruite-item-5.jpg" className="img-fluid w-100 rounded-top" alt="" />
                                                </div>
                                                <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{top: "10px", left: "10px"}}>Fruits</div>
                                                <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                    <h4>Grapes</h4>
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                                    <div className="d-flex justify-content-between flex-lg-wrap">
                                                        <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                                                        <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-4 col-xl-3">
                                            <div className="rounded position-relative fruite-item">
                                                <div className="fruite-img">
                                                    <img src="assets/img/fruite-item-2.jpg" className="img-fluid w-100 rounded-top" alt="" />
                                                </div>
                                                <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{top: "10px", left: "10px"}}>Fruits</div>
                                                <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                    <h4>Raspberries</h4>
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                                    <div className="d-flex justify-content-between flex-lg-wrap">
                                                        <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                                                        <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-4 col-xl-3">
                                            <div className="rounded position-relative fruite-item">
                                                <div className="fruite-img">
                                                    <img src="assets/img/fruite-item-4.jpg" className="img-fluid w-100 rounded-top" alt="" />
                                                </div>
                                                <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{top: "10px", left: "10px"}}>Fruits</div>
                                                <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                    <h4>Apricots</h4>
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                                    <div className="d-flex justify-content-between flex-lg-wrap">
                                                        <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                                                        <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-4 col-xl-3">
                                            <div className="rounded position-relative fruite-item">
                                                <div className="fruite-img">
                                                    <img src="assets/img/fruite-item-3.jpg" className="img-fluid w-100 rounded-top" alt="" />
                                                </div>
                                                <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{top: "10px", left: "10px"}}>Fruits</div>
                                                <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                    <h4>Banana</h4>
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                                    <div className="d-flex justify-content-between flex-lg-wrap">
                                                        <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                                                        <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-4 col-xl-3">
                                            <div className="rounded position-relative fruite-item">
                                                <div className="fruite-img">
                                                    <img src="assets/img/fruite-item-1.jpg" className="img-fluid w-100 rounded-top" alt="" />
                                                </div>
                                                <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{top: "10px", left: "10px"}}>Fruits</div>
                                                <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                    <h4>Oranges</h4>
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                                    <div className="d-flex justify-content-between flex-lg-wrap">
                                                        <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                                                        <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-4 col-xl-3">
                                            <div className="rounded position-relative fruite-item">
                                                <div className="fruite-img">
                                                    <img src="assets/img/fruite-item-2.jpg" className="img-fluid w-100 rounded-top" alt="" />
                                                </div>
                                                <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{top: "10px", left: "10px"}}>Fruits</div>
                                                <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                    <h4>Raspberries</h4>
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                                    <div className="d-flex justify-content-between flex-lg-wrap">
                                                        <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                                                        <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-4 col-xl-3">
                                            <div className="rounded position-relative fruite-item">
                                                <div className="fruite-img">
                                                    <img src="assets/img/fruite-item-5.jpg" className="img-fluid w-100 rounded-top" alt="" />
                                                </div>
                                                <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{top: "10px", left: "10px"}}>Fruits</div>
                                                <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                    <h4>Grapes</h4>
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                                    <div className="d-flex justify-content-between flex-lg-wrap">
                                                        <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                                                        <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="tab-2" className="tab-pane fade show p-0">
                            <div className="row g-4">
                                <div className="col-lg-12">
                                    <div className="row g-4">
                                        <div className="col-md-6 col-lg-4 col-xl-3">
                                            <div className="rounded position-relative fruite-item">
                                                <div className="fruite-img">
                                                    <img src="assets/img/fruite-item-5.jpg" className="img-fluid w-100 rounded-top" alt="" />
                                                </div>
                                                <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{top: "10px", left: "10px"}}>Fruits</div>
                                                <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                    <h4>Grapes</h4>
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                                    <div className="d-flex justify-content-between flex-lg-wrap">
                                                        <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                                                        <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-4 col-xl-3">
                                            <div className="rounded position-relative fruite-item">
                                                <div className="fruite-img">
                                                    <img src="assets/img/fruite-item-2.jpg" className="img-fluid w-100 rounded-top" alt="" />
                                                </div>
                                                <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{top: "10px", left: "10px"}}>Fruits</div>
                                                <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                    <h4>Raspberries</h4>
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                                    <div className="d-flex justify-content-between flex-lg-wrap">
                                                        <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                                                        <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="tab-3" className="tab-pane fade show p-0">
                            <div className="row g-4">
                                <div className="col-lg-12">
                                    <div className="row g-4">
                                        <div className="col-md-6 col-lg-4 col-xl-3">
                                            <div className="rounded position-relative fruite-item">
                                                <div className="fruite-img">
                                                    <img src="assets/img/fruite-item-1.jpg" className="img-fluid w-100 rounded-top" alt="" />
                                                </div>
                                                <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{top: "10px", left: "10px"}}>Fruits</div>
                                                <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                    <h4>Oranges</h4>
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                                    <div className="d-flex justify-content-between flex-lg-wrap">
                                                        <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                                                        <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-4 col-xl-3">
                                            <div className="rounded position-relative fruite-item">
                                                <div className="fruite-img">
                                                    <img src="assets/img/fruite-item-6.jpg" className="img-fluid w-100 rounded-top" alt="" />
                                                </div>
                                                <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{top: "10px", left: "10px"}}>Fruits</div>
                                                <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                    <h4>Apple</h4>
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                                    <div className="d-flex justify-content-between flex-lg-wrap">
                                                        <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                                                        <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="tab-4" className="tab-pane fade show p-0">
                            <div className="row g-4">
                                <div className="col-lg-12">
                                    <div className="row g-4">
                                        <div className="col-md-6 col-lg-4 col-xl-3">
                                            <div className="rounded position-relative fruite-item">
                                                <div className="fruite-img">
                                                    <img src="assets/img/fruite-item-5.jpg" className="img-fluid w-100 rounded-top" alt="" />
                                                </div>
                                                <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{top: "10px", left: "10px"}}>Fruits</div>
                                                <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                    <h4>Grapes</h4>
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                                    <div className="d-flex justify-content-between flex-lg-wrap">
                                                        <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                                                        <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-4 col-xl-3">
                                            <div className="rounded position-relative fruite-item">
                                                <div className="fruite-img">
                                                    <img src="assets/img/fruite-item-4.jpg" className="img-fluid w-100 rounded-top" alt="" />
                                                </div>
                                                <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{top: "10px", left: "10px"}}>Fruits</div>
                                                <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                    <h4>Apricots</h4>
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                                    <div className="d-flex justify-content-between flex-lg-wrap">
                                                        <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                                                        <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="tab-5" className="tab-pane fade show p-0">
                            <div className="row g-4">
                                <div className="col-lg-12">
                                    <div className="row g-4">
                                        <div className="col-md-6 col-lg-4 col-xl-3">
                                            <div className="rounded position-relative fruite-item">
                                                <div className="fruite-img">
                                                    <img src="assets/img/fruite-item-3.jpg" className="img-fluid w-100 rounded-top" alt="" />
                                                </div>
                                                <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{top: "10px", left: "10px"}}>Fruits</div>
                                                <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                    <h4>Banana</h4>
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                                    <div className="d-flex justify-content-between flex-lg-wrap">
                                                        <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                                                        <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-4 col-xl-3">
                                            <div className="rounded position-relative fruite-item">
                                                <div className="fruite-img">
                                                    <img src="assets/img/fruite-item-2.jpg" className="img-fluid w-100 rounded-top" alt="" />
                                                </div>
                                                <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{top: "10px", left: "10px"}}>Fruits</div>
                                                <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                    <h4>Raspberries</h4>
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                                    <div className="d-flex justify-content-between flex-lg-wrap">
                                                        <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                                                        <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-4 col-xl-3">
                                            <div className="rounded position-relative fruite-item">
                                                <div className="fruite-img">
                                                    <img src="assets/img/fruite-item-1.jpg" className="img-fluid w-100 rounded-top" alt="" />
                                                </div>
                                                <div className="text-white bg-secondary px-3 py-1 rounded position-absolute" style={{top: "10px", left: "10px"}}>Fruits</div>
                                                <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                                                    <h4>Oranges</h4>
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                                                    <div className="d-flex justify-content-between flex-lg-wrap">
                                                        <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                                                        <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>      
            </div>
        </div>
        {/* Fruits Shop End*/}


        {/* Featurs Start */}
        <div className="container-fluid service py-5">
            <div className="container py-5">
                <div className="row g-4 justify-content-center">
                    <div className="col-md-6 col-lg-4">
                        <a href="#">
                            <div className="service-item bg-secondary rounded border border-secondary">
                                <img src="assets/img/featur-1.jpg" className="img-fluid rounded-top w-100" alt="" />
                                <div className="px-4 rounded-bottom">
                                    <div className="service-content bg-primary text-center p-4 rounded">
                                        <h5 className="text-white">Fresh Apples</h5>
                                        <h3 className="mb-0">20% OFF</h3>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <a href="#">
                            <div className="service-item bg-dark rounded border border-dark">
                                <img src="assets/img/featur-2.jpg" className="img-fluid rounded-top w-100" alt="" />
                                <div className="px-4 rounded-bottom">
                                    <div className="service-content bg-light text-center p-4 rounded">
                                        <h5 className="text-primary">Tasty Fruits</h5>
                                        <h3 className="mb-0">Free delivery</h3>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <a href="#">
                            <div className="service-item bg-primary rounded border border-primary">
                                <img src="assets/img/featur-3.jpg" className="img-fluid rounded-top w-100" alt="" />
                                <div className="px-4 rounded-bottom">
                                    <div className="service-content bg-secondary text-center p-4 rounded">
                                        <h5 className="text-white">Exotic Vegitable</h5>
                                        <h3 className="mb-0">Discount 30$</h3>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        {/* Featurs End */}


        {/* Vesitable Shop Start*/}
        <div className="container-fluid vesitable py-5">
            <div className="container py-5">
                <h1 className="mb-1">Fresh Organic Vegetables</h1>

                <Slider {...settings}>
                    {carouselItems.map((item, index) => (
                        <div key={index} className="border border-primary rounded position-relative vesitable-item">
                        <div className="vesitable-img">
                            <img src={item.imageSrc} className="img-fluid w-100 rounded-top" alt="" />
                        </div>
                        <div className="text-white bg-primary px-3 py-1 rounded position-absolute" style={{top: "10px", right: "10px"}}>Vegetable</div>
                        <div className="p-4 rounded-bottom">
                            <h4>{item.title}</h4>
                            <p>{item.description}</p>
                            <div className="d-flex justify-content-between flex-lg-wrap">
                            <p className="text-dark fs-5 fw-bold mb-0">{item.price}</p>   

                            <a href={item.addToCartLink} className="btn border border-secondary rounded-pill px-3 text-primary">
                                <i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart
                            </a>
                            </div>
                        </div>
                        </div>
                    ))}
                </Slider>




                
            </div>
        </div>
        {/* Vesitable Shop End */}


        {/* Banner Section Start*/}
        <div className="container-fluid banner bg-secondary my-5">
            <div className="container py-5">
                <div className="row g-4 align-items-center">
                    <div className="col-lg-6">
                        <div className="py-4">
                            <h1 className="display-3 text-white">Fresh Exotic Fruits</h1>
                            <p className="fw-normal display-3 text-dark mb-4">in Our Store</p>
                            <p className="mb-4 text-dark">The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc.</p>
                            <a href="#" className="banner-btn btn border-2 border-white rounded-pill text-dark py-3 px-5">BUY</a>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="position-relative">
                            <img src="assets/img/baner-1.png" className="img-fluid w-100 rounded" alt="" />
                            <div className="d-flex align-items-center justify-content-center bg-white rounded-circle position-absolute" style={{width: "140px", height: "140px", top: "0", left: "0"}}>
                                <h1 style={{fontSize: "100px"}}>1</h1>
                                <div className="d-flex flex-column">
                                    <span className="h2 mb-0">50$</span>
                                    <span className="h4 text-muted mb-0">kg</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Banner Section End */}


        {/* Bestsaler Product Start */}
        <div className="container-fluid py-5">
            <div className="container py-5">
                <div className="text-center mx-auto mb-5" style={{maxWidth: "700px"}}>
                    <h1 className="display-4">Bestseller Products</h1>
                    <p>Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>
                </div>
                <div className="row g-4">
                    <div className="col-lg-6 col-xl-4">
                        <div className="p-4 rounded bg-light">
                            <div className="row align-items-center">
                                <div className="col-6">
                                    <img src="assets/img/best-product-1.jpg" className="img-fluid rounded-circle w-100" alt="" />
                                </div>
                                <div className="col-6">
                                    <a href="#" className="h5">Organic Tomato</a>
                                    <div className="d-flex my-3">
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                    <h4 className="mb-3">3.12 $</h4>
                                    <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-4">
                        <div className="p-4 rounded bg-light">
                            <div className="row align-items-center">
                                <div className="col-6">
                                    <img src="assets/img/best-product-2.jpg" className="img-fluid rounded-circle w-100" alt="" />
                                </div>
                                <div className="col-6">
                                    <a href="#" className="h5">Organic Tomato</a>
                                    <div className="d-flex my-3">
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                    <h4 className="mb-3">3.12 $</h4>
                                    <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-4">
                        <div className="p-4 rounded bg-light">
                            <div className="row align-items-center">
                                <div className="col-6">
                                    <img src="assets/img/best-product-3.jpg" className="img-fluid rounded-circle w-100" alt="" />
                                </div>
                                <div className="col-6">
                                    <a href="#" className="h5">Organic Tomato</a>
                                    <div className="d-flex my-3">
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                    <h4 className="mb-3">3.12 $</h4>
                                    <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-4">
                        <div className="p-4 rounded bg-light">
                            <div className="row align-items-center">
                                <div className="col-6">
                                    <img src="assets/img/best-product-4.jpg" className="img-fluid rounded-circle w-100" alt="" />
                                </div>
                                <div className="col-6">
                                    <a href="#" className="h5">Organic Tomato</a>
                                    <div className="d-flex my-3">
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                    <h4 className="mb-3">3.12 $</h4>
                                    <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-4">
                        <div className="p-4 rounded bg-light">
                            <div className="row align-items-center">
                                <div className="col-6">
                                    <img src="assets/img/best-product-5.jpg" className="img-fluid rounded-circle w-100" alt="" />
                                </div>
                                <div className="col-6">
                                    <a href="#" className="h5">Organic Tomato</a>
                                    <div className="d-flex my-3">
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                    <h4 className="mb-3">3.12 $</h4>
                                    <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-4">
                        <div className="p-4 rounded bg-light">
                            <div className="row align-items-center">
                                <div className="col-6">
                                    <img src="assets/img/best-product-6.jpg" className="img-fluid rounded-circle w-100" alt="" />
                                </div>
                                <div className="col-6">
                                    <a href="#" className="h5">Organic Tomato</a>
                                    <div className="d-flex my-3">
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                    <h4 className="mb-3">3.12 $</h4>
                                    <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3">
                        <div className="text-center">
                            <img src="assets/img/fruite-item-1.jpg" className="img-fluid rounded" alt="" />
                            <div className="py-4">
                                <a href="#" className="h5">Organic Tomato</a>
                                <div className="d-flex my-3 justify-content-center">
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                                <h4 className="mb-3">3.12 $</h4>
                                <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3">
                        <div className="text-center">
                            <img src="assets/img/fruite-item-2.jpg" className="img-fluid rounded" alt="" />
                            <div className="py-4">
                                <a href="#" className="h5">Organic Tomato</a>
                                <div className="d-flex my-3 justify-content-center">
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                                <h4 className="mb-3">3.12 $</h4>
                                <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3">
                        <div className="text-center">
                            <img src="assets/img/fruite-item-3.jpg" className="img-fluid rounded" alt="" />
                            <div className="py-4">
                                <a href="#" className="h5">Organic Tomato</a>
                                <div className="d-flex my-3 justify-content-center">
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                                <h4 className="mb-3">3.12 $</h4>
                                <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3">
                        <div className="text-center">
                            <img src="assets/img/fruite-item-4.jpg" className="img-fluid rounded" alt="" />
                            <div className="py-2">
                                <a href="#" className="h5">Organic Tomato</a>
                                <div className="d-flex my-3 justify-content-center">
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star text-primary"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                                <h4 className="mb-3">3.12 $</h4>
                                <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Bestsaler Product End */}


        {/* Fact Start */}
        <div className="container-fluid py-5">
            <div className="container">
                <div className="bg-light p-5 rounded">
                    <div className="row g-4 justify-content-center">
                        <div className="col-md-6 col-lg-6 col-xl-3">
                            <div className="counter bg-white rounded p-5">
                                <i className="fa fa-users text-secondary"></i>
                                <h4>satisfied customers</h4>
                                <h1>1963</h1>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-3">
                            <div className="counter bg-white rounded p-5">
                                <i className="fa fa-users text-secondary"></i>
                                <h4>quality of service</h4>
                                <h1>99%</h1>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-3">
                            <div className="counter bg-white rounded p-5">
                                <i className="fa fa-users text-secondary"></i>
                                <h4>quality certificates</h4>
                                <h1>33</h1>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-3">
                            <div className="counter bg-white rounded p-5">
                                <i className="fa fa-users text-secondary"></i>
                                <h4>Available Products</h4>
                                <h1>789</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Fact Start */}


        {/* Tastimonial Start */}
        <div className="container-fluid testimonial py-5">
            <div className="container py-5">
                <div className="testimonial-header text-center">
                    <h4 className="text-primary">Our Testimonial</h4>
                    <h1 className="display-5 mb-5 text-dark">Our Client Saying!</h1>
                </div>


                <Slider {...settings1}>
                    {client_review.map((item, index) => (
                       <div key ={index} className="testimonial-item img-border-radius bg-light rounded p-4">
                       <div className="position-relative">
                           <i className="fa fa-quote-right fa-2x text-secondary position-absolute" style={{bottom: "30px", right: "0"}}></i>
                           <div className="mb-4 pb-4 border-bottom border-secondary">
                               <p className="mb-0">{item.client_review}
                               </p>
                           </div>
                           <div className="d-flex align-items-center flex-nowrap">
                               <div className="bg-secondary rounded">
                                   <img src={item.client_img} className="img-fluid rounded" style={{width: "100px", height: "100px"}} alt=''/>
                               </div>
                               <div className="ms-4 d-block">
                                   <h4 className="text-dark"> {item.client_name}</h4>
                                   <p className="m-0 pb-3">{item.client_profession}</p>
                                   <div className="d-flex pe-5">
                                       <i className="fas fa-star text-primary"></i>
                                       <i className="fas fa-star text-primary"></i>
                                       <i className="fas fa-star text-primary"></i>
                                       <i className="fas fa-star text-primary"></i>
                                       <i className="fas fa-star"></i>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
                    ))}
                </Slider>


                   

                <div className="owl-carousel testimonial-carousel">
                    <div className="testimonial-item img-border-radius bg-light rounded p-4">
                        <div className="position-relative">
                            <i className="fa fa-quote-right fa-2x text-secondary position-absolute" style={{bottom: "30px", right: "0"}}></i>
                            <div className="mb-4 pb-4 border-bottom border-secondary">
                                <p className="mb-0">Lorem Ipsum is simply dummy text of the printing Ipsum has been the industry's standard dummy text ever since the 1500s,
                                </p>
                            </div>
                            <div className="d-flex align-items-center flex-nowrap">
                                <div className="bg-secondary rounded">
                                    <img src="assets/img/testimonial-1.jpg" className="img-fluid rounded" style={{width: "100px", height: "100px"}} alt=''/>
                                </div>
                                <div className="ms-4 d-block">
                                    <h4 className="text-dark">Client Name</h4>
                                    <p className="m-0 pb-3">Profession</p>
                                    <div className="d-flex pe-5">
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div className="testimonial-item img-border-radius bg-light rounded p-4">
                        <div className="position-relative">
                            <i className="fa fa-quote-right fa-2x text-secondary position-absolute" style={{bottom: "30px", right: "0"}}></i>
                            <div className="mb-4 pb-4 border-bottom border-secondary">
                                <p className="mb-0">Lorem Ipsum is simply dummy text of the printing Ipsum has been the industry's standard dummy text ever since the 1500s,
                                </p>
                            </div>
                            <div className="d-flex align-items-center flex-nowrap">
                                <div className="bg-secondary rounded">
                                    <img src="assets/img/testimonial-1.jpg" className="img-fluid rounded" style={{width: "100px", height: "100px"}} alt="" />
                                </div>
                                <div className="ms-4 d-block">
                                    <h4 className="text-dark">Client Name</h4>
                                    <p className="m-0 pb-3">Profession</p>
                                    <div className="d-flex pe-5">
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star text-primary"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-item img-border-radius bg-light rounded p-4">
                        <div className="position-relative">
                            <i className="fa fa-quote-right fa-2x text-secondary position-absolute" style={{bottom: "30px", right: "0"}}></i>
                            <div className="mb-4 pb-4 border-bottom border-secondary">
                                <p className="mb-0">Lorem Ipsum is simply dummy text of the printing Ipsum has been the industry's standard dummy text ever since the 1500s,
                                </p>
                            </div>
                            <div className="d-flex align-items-center flex-nowrap">
                                <div className="bg-secondary rounded">
                                    <img src="assets/img/testimonial-1.jpg" className="img-fluid rounded" style={{width: "100px", height: "100px"}} alt=""/>
                                </div>
                                <div className="ms-4 d-block">
                                    <h4 className="text-dark">Client Name</h4>
                                    <p className="m-0 pb-3">Profession</p>
                                    <div className="d-flex pe-5">
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star text-primary"></i>
                                        <i className="fas fa-star text-primary"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    
                </div>
            </div>
        </div>
        {/* Tastimonial End */}


        {/* footer */}
       <ReUseFooter />
       {/* footer end    */}

        
    

    </div>
  )
}

export default Home