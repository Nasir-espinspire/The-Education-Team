<?php $basename = basename($_SERVER['SCRIPT_FILENAME']); ?>
<!doctype html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="" />
    <meta name="keywords" content="" />
    <title>Project Title</title>
    <?php include("inc/header.php"); ?>
    <div id="carouselExampleIndicators" class="carousel slide carousel-fade" data-bs-interval="5000"
        data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
                aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="images/banner.png" class="img-fluid w-100" alt="Image 1">
                <div class="caption">
                    <span>The Education Team</span>
                    <h1>Human Touch, Professional Educators, Dream Careers</h1>
                    <div class="btns btns d-flex gap-2 justify-content-center">
                        <button class="btn btn-primary">I want to Teach <i class="icon-Arrow-1"></i></button>
                        <button class="btn btn-light">I Need a Sub <i class="icon-Arrow-1"></i></button>
                    </div>
                </div>
            </div>
            <div class="carousel-item">
                <img src="images/banner1.png" class="img-fluid w-100" alt="Image 1">
                <div class="caption">
                    <span>The Education Team</span>
                    <h1>Human Touch, Professional Educators, Dream Careers</h1>
                    <div class="btns d-flex gap-2 justify-content-center">
                        <button class="btn btn-primary">I want to Teach <i class="icon-Arrow-1"></i> </button>
                        <button class="btn btn-light">I Need a Sub <i class="icon-Arrow-1"></i></button>
                    </div>
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev">
            <span class="carousel-control-left" aria-hidden="true"><i class="icon-arrow1"></i></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next">
            <span class="carousel-control-right" aria-hidden="true"><i class="icon-arrow1"></i></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
    <main id="main">
        <section class="block intro-block">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <img src="images/team1.png" alt="" class="img-fluid">
                        <div class="text">
                            <h2>I Need a
                                <span>Substitute</span>
                            </h2>
                            <p>The Education Team handles everything. Our substitutes are
                                highly qualified. They are interviewed, thoroughly screened and meet all regulatory
                                requirements</p>
                            <button class="btn btn-primary">More Info <i class="icon-Arrow-1"></i></button>
                        </div>
                    </div>
                    <div class="col">
                        <img src="images/team2.png" alt="" class="img-fluid">
                        <div class="text">
                            <h2>I Want to
                                <span>Teach</span>
                            </h2>
                            <p>We hire experienced educators and those just entering the profession. Our team of
                                recruiters will walk you through the process and you can be working in a few days</p>
                            <button class="btn btn-primary">Apply Now <i class="icon-Arrow-1"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="block education-placement">
            <div class="container">
                <h2>Tailored, School-Centric <span>Educational</span> Placement</h2>
                <p>Founded in 1996 as a staffing firm focused exclusively on education, the Education Team
                    understands
                    what <br>
                    schools need. We offer a tailored, school-centric approach to keeping schools staffed.</p>
            </div>
            <div class="clients">
                <div class="container">
                    <h2>Our <span>Clients</span> Are</h2>
                    <div class="row justify-content-center">
                        <div class="col-md-3">
                            <div class="box">
                                <i class="icon-school-district"></i>
                                <h4>Public School Districts</h4>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="box">
                                <i class="icon-charactor-school"></i>
                                <h4>Charter Schools</h4>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="box">
                                <i class="icon-school-program"></i>
                                <h4>After-School Programs</h4>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="box">
                                <i class="icon-independent-school"></i>
                                <h4>Independent Schools</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="block candidates-block">
            <div class="container">
                <h2>Our <span>Process</span></h2>
                <div class="row justify-content-center">
                    <div class="col">
                        <div class="box">
                            <img src="images/candidates1.jpg" alt="" class="img-fluid">
                            <p>We source hundreds of candidates</p>
                            <span>1</span>
                        </div>
                    </div>
                    <div class="col">
                        <div class="box">
                            <img src="images/candidates2.jpg" alt="" class="img-fluid">
                            <p>We screen, interview, background check each candidate</p>
                            <span>2</span>
                        </div>
                    </div>
                    <div class="col">
                        <div class="box">
                            <img src="images/candidates3.jpg" alt="" class="img-fluid">
                            <p>We hire the candidate <br> and place them into our sub pool based on their
                                qualifications
                                and
                                experience</p>
                            <span>3</span>
                        </div>
                    </div>
                    <div class="col">
                        <div class="box">
                            <img src="images/candidates4.jpg" alt="" class="img-fluid">
                            <p>You request a sub using our online portal, or by calling/emailing your assigned
                                Placement
                                Coordinator</p>
                            <span>4</span>
                        </div>
                    </div>
                    <div class="col">
                        <div class="box">
                            <img src="images/candidates5.jpg" alt="" class="img-fluid">
                            <p>Placement Coordinator matches the best sub to your request and a sub is dispatched
                            </p>
                            <span>5</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="block buttons-block py-5">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <div class="box" style="background-color:#d2232a;">
                            <h2>Do You Need a Teacher?</h2>
                            <button class="btn btn-light">
                                Apply Now
                                <i class="icon-Arrow-1"></i>
                            </button>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="box bg-dark">
                            <h2 class="text-white">Do You Want to Teach?</h2>
                            <button class="btn btn-light">
                                More Info
                                <i class="icon-Arrow-1"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="block Testimonials-block">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-md-6">
                        <h2>Testimonials</h2>
                        <div id="carouselExampleIndicators" class="carousel slide carousel-fade" data-bs-interval="5000"
                            data-bs-ride="carousel">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                                    class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                                    aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                                    aria-label="Slide 3"></button>
                            </div>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <div class="slide">
                                        <blockquote>
                                            <p>Great job for College graduates, or aspiring teachers. Very flexible,
                                                simple
                                                job that
                                                you
                                                can work based on your schedule. They are one of the most organized
                                                substitute
                                                agencies
                                                I have ever worked for. They also pay more if you have a degree, which
                                                is
                                                awesome.
                                            </p>
                                            <cite>
                                                After School Substitute <br>
                                                <span>(Current Employee) – January, 9, 2023</span> <br>
                                                San Diego, CA
                                            </cite>
                                        </blockquote>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div class="slide">
                                        <blockquote>
                                            <p>Great job for College graduates, or aspiring teachers. Very flexible,
                                                simple
                                                job that
                                                you
                                                can work based on your schedule. They are one of the most organized
                                                substitute
                                                agencies
                                            </p>
                                            <cite>
                                                After School Substitute <br>
                                                <span>(Current Employee) – January, 9, 2023</span>
                                            </cite>
                                        </blockquote>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div class="slide">
                                        <blockquote>
                                            <p>
                                                job that
                                                you
                                                can work based on your schedule. They are one of the most organized
                                                substitute
                                                agencies
                                            </p>
                                            <cite>
                                                After School Substitute <br>
                                                <span>(Current Employee) – January, 9, 2023</span>
                                            </cite>
                                        </blockquote>
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button"
                                    data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                    <span class="carousel-control" aria-hidden="true">

                                    </span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button"
                                    data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                    <span class="carousel-control" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 py-3">
                        <img src="images\patners.png" alt="" class="img-fluid">
                    </div>
                </div>
            </div>
        </section>
        <section class="block partners-block">
            <div class="container">
                <h2>Our <span>Partners</span> </h2>
                <div class="d-flex justify-content-center boxes">
                    <div class="column">
                        <div class="box">
                            <div class="inner">
                                <img src="images\patners-logo2.png" alt="" class="img-fluid">
                            </div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="box">
                            <div class="inner">
                                <img src="images\patners-logo3.png" alt="" class="img-fluid">
                            </div>
                        </div>
                        <div class="box">
                            <div class="inner">
                                <img src="images\patners-logo1.png" alt="" class="img-fluid">
                            </div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="box">
                            <div class="inner">
                                <img src="images\patners-logo4.png" alt="" class="img-fluid">
                            </div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="box">
                            <div class="inner">
                                <img src="images\patners-logo5.png" alt="" class="img-fluid">
                            </div>
                        </div>
                        <div class="box">
                            <div class="inner">
                                <img src="images\patners-logo6.png" alt="" class="img-fluid">
                            </div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="box">
                            <div class="inner">
                                <img src="images\patners-logo7.png" alt="" class="img-fluid">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <?php include("inc/footer.php"); ?>