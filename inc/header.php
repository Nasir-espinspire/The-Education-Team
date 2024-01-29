<!-- Bootstrap CSS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
<link rel="icon" type="image/png" sizes="32x32" href="images/favicon-32x32.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link
    href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,700;1,600&family=Roboto:wght@400;500;700&display=swap"
    rel="stylesheet">
<?php if($basename=='index.php'){ ?>
<link rel="stylesheet" href="css/home.css">
<?php } else {?>
<link rel="stylesheet" href="css/all.css">
<?php }?>
</head>

<body>
    <!-- <a class="accessibility" href="#header">Back to top</a>
		<a class="accessibility" href="#main">Skip to Content</a> -->
    <div id="wrapper">
        <header id="header" class="header sticky-top">
            <div class="topbar  sticky-hide">
                <div class="container  d-flex  justify-content-between align-items-center">
                    <div class="social-informatio">
                        <a href="#" class="text-light mx-2"> <i class="icon-Vector"></i>
                            <span class="text">info@lifecoach.com</span>
                        </a>
                        <a href="#" class="text-light mx-2"> <i class="icon-Frame"></i>
                            <span class="text">+1-202-555-0182</span>
                        </a>
                    </div>
                    <div class="list-unstyled">
                        <ul class="d-flex">
                            <li>
                                <a href="#" class="text-light mx-2"> <i class="icon-Instagram---Negative"></i></a>
                            </li>
                            <li>
                                <a href="#" class="text-light mx-2"> <i class="icon-Facebook---Negative"></i></a>
                            </li>
                            <li>
                                <a href="#" class="text-light mx-2"> <i class="icon-Twitter---Negative"></i></a>
                            </li>
                            <li>
                                <a href="#" class="text-light mx-2"> <i class="icon-LinkedIn---Negative"></i></a>
                            </li>
                            <li>
                                <a href="#" class="text-light mx-2">Testimonials</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container d-flex">
                    <a class="navbar-brand" href="#">
                        <img src="images\logo.png" alt="" class=" site-logo img-fluid">
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mx-auto  mb-lg-0" id="nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Schools</a>
                                <ul>
                                    <li>
                                        <a href="#">Faqs</a>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Teacher</a>
                                <ul>
                                    <li>
                                        <a href="#">Faqs</a>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#myTab">Contact Us</a>
                            </li>
                        </ul>

                    </div>
                    <div class="field">
                        <button class="btn"><i class="icon-fi-ss-user"></i> <span>User Portal</span></button>
                    </div>
                </div>
            </nav>

        </header>