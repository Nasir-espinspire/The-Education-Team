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
<div class="container py-5">
    <div class="row mb-10">
      <div class="col">
        <nav class="navbar navbar-toggleable-md navbar-inverse bg-inverse">
          <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
          <a class="navbar-brand" href="#">Navbar</a>

          <div class="collapse navbar-collapse" id="navbarColor01">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Features</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Pricing</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">About</a>
              </li>
            </ul>
            <form class="form-inline">
              <input class="form-control mr-sm-2" type="text" placeholder="Search">
              <button class="btn btn-outline-info my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </nav>

        <nav class="navbar navbar-toggleable-md navbar-inverse bg-primary">
          <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <a class="navbar-brand" href="#">Navbar</a>

          <div class="collapse navbar-collapse" id="navbarColor02">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Features</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Pricing</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">About</a>
              </li>
            </ul>
            <form class="form-inline">
              <input class="form-control mr-sm-2" type="text" placeholder="Search">
              <button class="btn btn-outline-secondary my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </nav>

        <nav class="navbar navbar-toggleable-md navbar-light" style="background-color: #e3f2fd;">
          <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <a class="navbar-brand" href="#">Navbar</a>

          <div class="collapse navbar-collapse" id="navbarColor03">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Features</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Pricing</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">About</a>
              </li>
            </ul>
            <form class="form-inline">
              <input class="form-control mr-sm-2" type="text" placeholder="Search">
              <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </nav>
      </div>
    </div>
      <div class="row">
        <div class="col">
          <h1>h1. Bootstrap heading</h1>
          <h2>h2. Bootstrap heading</h2>
          <h3>h3. Bootstrap heading</h3>
          <h4>h4. Bootstrap heading</h4>
          <h5>h5. Bootstrap heading</h5>
          <h6>h6. Bootstrap heading</h6>
          <hr>
          <p class="h1">h1. Bootstrap heading</p>
          <p class="h2">h2. Bootstrap heading</p>
          <p class="h3">h3. Bootstrap heading</p>
          <p class="h4">h4. Bootstrap heading</p>
          <p class="h5">h5. Bootstrap heading</p>
          <p class="h6">h6. Bootstrap heading</p>
        </div>
      </div>
      <hr>
      <div class="row">
        <div class="col">
          <h3>
            Fancy display heading
            <small class="text-muted">With faded secondary text</small>
          </h3>
        </div>
      </div>
      <hr>
      <div class="row">
        <div class="col">
          <h1 class="display-1">Display 1</h1>
          <h1 class="display-2">Display 2</h1>
          <h1 class="display-3">Display 3</h1>
          <h1 class="display-4">Display 4</h1>
        </div>
      </div>
      <hr>
      <div class="row">
        <div class="col">
          <p class="lead">
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.
          </p>
        </div>
      </div>
      <hr>
      <div class="row">
        <div class="col">
          <p>You can use the mark tag to <mark>highlight</mark> text.</p>
          <p><del>This line of text is meant to be treated as deleted text.</del></p>
          <p><s>This line of text is meant to be treated as no longer accurate.</s></p>
          <p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
          <p><u>This line of text will render as underlined</u></p>
          <p><small>This line of text is meant to be treated as fine print.</small></p>
          <p><strong>This line rendered as bold text.</strong></p>
          <p><em>This line rendered as italicized text.</em></p>
        </div>
      </div>
      <hr>
      <div class="row">
        <div class="col">
          <blockquote class="blockquote">
            <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
          </blockquote>
          <blockquote class="blockquote">
            <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
            <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
          </blockquote>
          <blockquote class="blockquote blockquote-reverse">
            <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
            <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
          </blockquote>
        </div>
      </div>
      <hr>
      <div class="row">
        <div class="col">
          <ul class="list-unstyled">
            <li>Lorem ipsum dolor sit amet</li>
            <li>Consectetur adipiscing elit</li>
            <li>Integer molestie lorem at massa</li>
            <li>Facilisis in pretium nisl aliquet</li>
            <li>Nulla volutpat aliquam velit
              <ul>
                <li>Phasellus iaculis neque</li>
                <li>Purus sodales ultricies</li>
                <li>Vestibulum laoreet porttitor sem</li>
                <li>Ac tristique libero volutpat at</li>
              </ul>
            </li>
            <li>Faucibus porta lacus fringilla vel</li>
            <li>Aenean sit amet erat nunc</li>
            <li>Eget porttitor lorem</li>
          </ul>
          <ul class="list-inline">
            <li class="list-inline-item">Lorem ipsum</li>
            <li class="list-inline-item">Phasellus iaculis</li>
            <li class="list-inline-item">Nulla volutpat</li>
          </ul>
          <dl class="row">
            <dt class="col-sm-3">Description lists</dt>
            <dd class="col-sm-9">A description list is perfect for defining terms.</dd>

            <dt class="col-sm-3">Euismod</dt>
            <dd class="col-sm-9">Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>
            <dd class="col-sm-9 offset-sm-3">Donec id elit non mi porta gravida at eget metus.</dd>

            <dt class="col-sm-3">Malesuada porta</dt>
            <dd class="col-sm-9">Etiam porta sem malesuada magna mollis euismod.</dd>

            <dt class="col-sm-3 text-truncate">Truncated term is truncated</dt>
            <dd class="col-sm-9">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</dd>

            <dt class="col-sm-3">Nesting</dt>
            <dd class="col-sm-9">
              <dl class="row">
                <dt class="col-sm-4">Nested definition list</dt>
                <dd class="col-sm-8">Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc.</dd>
              </dl>
            </dd>
          </dl>
        </div>
      </div>
      <hr>
      <div class="row">
        <div class="col">
          <table class="table">
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
          <table class="table table-inverse">
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
          <table class="table">
            <thead class="thead-inverse">
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>

          <table class="table">
            <thead class="thead-default">
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
          <table class="table table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
          <table class="table table-striped table-inverse">
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
          <table class="table table-bordered">
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@TwBootstrap</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
          <table class="table table-bordered table-inverse">
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@TwBootstrap</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
          <table class="table table-inverse">
            <thead>
              <tr>
                <th>#</th>
                <th>Column heading</th>
                <th>Column heading</th>
                <th>Column heading</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-primary">
                <th scope="row">1</th>
                <td>Column content</td>
                <td>Column content</td>
                <td>Column content</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Column content</td>
                <td>Column content</td>
                <td>Column content</td>
              </tr>
              <tr class="bg-success">
                <th scope="row">3</th>
                <td>Column content</td>
                <td>Column content</td>
                <td>Column content</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>Column content</td>
                <td>Column content</td>
                <td>Column content</td>
              </tr>
              <tr class="bg-info">
                <th scope="row">5</th>
                <td>Column content</td>
                <td>Column content</td>
                <td>Column content</td>
              </tr>
              <tr>
                <th scope="row">6</th>
                <td>Column content</td>
                <td>Column content</td>
                <td>Column content</td>
              </tr>
              <tr class="bg-warning">
                <th scope="row">7</th>
                <td>Column content</td>
                <td>Column content</td>
                <td>Column content</td>
              </tr>
              <tr>
                <th scope="row">8</th>
                <td>Column content</td>
                <td>Column content</td>
                <td>Column content</td>
              </tr>
              <tr class="bg-danger">
                <th scope="row">9</th>
                <td>Column content</td>
                <td>Column content</td>
                <td>Column content</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <hr>
      <div class="row">
        <div class="col">
          <div class="alert alert-success" role="alert">
            <strong>Well done!</strong> You successfully read this important alert message.
          </div>
          <div class="alert alert-info" role="alert">
            <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
          </div>
          <div class="alert alert-warning" role="alert">
            <strong>Warning!</strong> Better check yourself, you're not looking too good.
          </div>
          <div class="alert alert-danger" role="alert">
            <strong>Oh snap!</strong> Change a few things up and try submitting again.
          </div>
        </div>
      </div>
      <hr>
      <div class="row">
        <div class="col">
          <h1>Example heading <span class="badge badge-default">New</span></h1>
          <h2>Example heading <span class="badge badge-primary">New</span></h2>
          <h3>Example heading <span class="badge badge-success">New</span></h3>
          <h4>Example heading <span class="badge badge-info">New</span></h4>
          <h5>Example heading <span class="badge badge-warning">New</span></h5>
          <h6>Example heading <span class="badge badge-danger">New</span></h6>
          <div class="row">
            <div class="col">
              <span class="badge badge-pill badge-default">Default</span>
              <span class="badge badge-pill badge-primary">Primary</span>
              <span class="badge badge-pill badge-success">Success</span>
              <span class="badge badge-pill badge-info">Info</span>
              <span class="badge badge-pill badge-warning">Warning</span>
              <span class="badge badge-pill badge-danger">Danger</span>
            </div>
          </div>
        </div>
      </div>
      <hr>
      <div class="row">
        <div class="col">
          <ol class="breadcrumb">
            <li class="breadcrumb-item active">Home</li>
          </ol>
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item active">Library</li>
          </ol>
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item"><a href="#">Library</a></li>
            <li class="breadcrumb-item active">Data</li>
          </ol>
          <nav class="breadcrumb">
            <a class="breadcrumb-item" href="#">Home</a>
            <a class="breadcrumb-item" href="#">Library</a>
            <a class="breadcrumb-item" href="#">Data</a>
            <span class="breadcrumb-item active">Bootstrap</span>
          </nav>
        </div>
      </div>
      <hr>
      <div class="row">
        <div class="col">
          <div class="row mb-4">
            <div class="col">
              <!-- Provides extra visual weight and identifies the primary action in a set of buttons -->
              <button type="button" class="btn btn-primary">Primary</button>

              <!-- Secondary, outline button -->
              <button type="button" class="btn btn-secondary">Secondary</button>

              <!-- Indicates a successful or positive action -->
              <button type="button" class="btn btn-success">Success</button>

              <!-- Contextual button for informational alert messages -->
              <button type="button" class="btn btn-info">Info</button>

              <!-- Indicates caution should be taken with this action -->
              <button type="button" class="btn btn-warning">Warning</button>

              <!-- Indicates a dangerous or potentially negative action -->
              <button type="button" class="btn btn-danger">Danger</button>
            </div>
          </div>

          <!-- Deemphasize a button by making it look like a link while maintaining button behavior -->
          <div class="row">
            <div class="col">
              <button type="button" class="btn btn-link">Link</button>
              <button type="button" class="btn btn-outline-primary">Primary</button>
              <button type="button" class="btn btn-outline-secondary">Secondary</button>
              <button type="button" class="btn btn-outline-success">Success</button>
              <button type="button" class="btn btn-outline-info">Info</button>
              <button type="button" class="btn btn-outline-warning">Warning</button>
              <button type="button" class="btn btn-outline-danger">Danger</button>
            </div>
          </div>
        </div>
      </div>
      <hr>
      <div class="row">
        <div class="col">
          <div class="btn-group" data-toggle="buttons">
            <label class="btn btn-primary active">
              <input type="checkbox" checked autocomplete="off"> Checkbox 1 (pre-checked)
            </label>
            <label class="btn btn-primary">
              <input type="checkbox" autocomplete="off"> Checkbox 2
            </label>
            <label class="btn btn-primary">
              <input type="checkbox" autocomplete="off"> Checkbox 3
            </label>
          </div>
          <div class="btn-group" data-toggle="buttons">
            <label class="btn btn-primary active">
              <input type="radio" name="options" id="option1" autocomplete="off" checked> Radio 1 (preselected)
            </label>
            <label class="btn btn-primary">
              <input type="radio" name="options" id="option2" autocomplete="off"> Radio 2
            </label>
            <label class="btn btn-primary">
              <input type="radio" name="options" id="option3" autocomplete="off"> Radio 3
            </label>
          </div>
        </div>
      </div>
      <hr>
      <div class="row">
        <div class="col">
          <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner" role="listbox">
              <div class="carousel-item active">
                <img class="d-block img-fluid w-100" data-src="holder.js/800x400?auto=yes&amp;bg=777&amp;fg=555&amp;text=First slide" alt="First slide [800x400]" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15bb3ce35f0%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15bb3ce35f0%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22217.7%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true">
              </div>
              <div class="carousel-item">
                <img class="d-block img-fluid w-100" data-src="holder.js/800x400?auto=yes&amp;bg=666&amp;fg=444&amp;text=Second slide" alt="Second slide [800x400]" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15bb3ce35f2%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15bb3ce35f2%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22217.7%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true">
              </div>
              <div class="carousel-item">
                <img class="d-block img-fluid w-100" data-src="holder.js/800x400?auto=yes&amp;bg=555&amp;fg=333&amp;text=Third slide" alt="Third slide [800x400]" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15bb3ce35f3%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15bb3ce35f3%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22217.7%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" data-holder-rendered="true">
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
      <hr>
      <div class="row">
        <div class="col">
          <div class="accordion" id="accordionExample">
            <div class="card">
              <div class="card-header" id="headingOne">
                <h5 class="mb-0">
                  <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Collapsible Group Item #1
                  </button>
                </h5>
              </div>

              <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                <div class="card-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                  </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header" id="headingTwo">
                <h5 class="mb-0">
                  <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Collapsible Group Item #2
                  </button>
                </h5>
              </div>
              <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                <div class="card-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header" id="headingThree">
                <h5 class="mb-0">
                  <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Collapsible Group Item #3
                  </button>
                </h5>
              </div>
              <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                <div class="card-body">
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr>
      <div class="row">
        <div class="col">
          <form>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
              <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
            </div>
            <div class="form-group">
              <label for="exampleSelect1">Example select</label>
              <select class="form-control" id="exampleSelect1">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            <div class="form-group">
              <label for="exampleSelect2">Example multiple select</label>
              <select multiple class="form-control" id="exampleSelect2">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            <div class="form-group">
              <label for="exampleTextarea">Example textarea</label>
              <textarea class="form-control" id="exampleTextarea" rows="3"></textarea>
            </div>
            <div class="form-group">
              <label for="exampleInputFile">File input</label>
              <input type="file" class="form-control-file" id="exampleInputFile" aria-describedby="fileHelp">
              <small id="fileHelp" class="form-text text-muted">This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line.</small>
            </div>
            <fieldset class="form-group">
              <legend>Radio buttons</legend>
              <div class="form-check">
                <label class="form-check-label">
                  <input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios1" value="option1" checked>
                  Option one is this and that&mdash;be sure to include why it's great
                </label>
              </div>
              <div class="form-check">
              <label class="form-check-label">
                  <input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2">
                  Option two can be something else and selecting it will deselect option one
                </label>
              </div>
              <div class="form-check disabled">
              <label class="form-check-label">
                  <input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios3" value="option3" disabled>
                  Option three is disabled
                </label>
              </div>
            </fieldset>
            <div class="form-check">
              <label class="form-check-label">
                <input type="checkbox" class="form-check-input">
                Check me out
              </label>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
      <hr>
      <div class="row">
        <div class="col">
          <div class="container">
            <form>
              <div class="form-group row">
                <label for="lgFormGroupInput" class="col-sm-2 col-form-label col-form-label-lg">Email</label>
                <div class="col-sm-10">
                  <input type="email" class="form-control form-control-lg" id="lgFormGroupInput" placeholder="you@example.com">
                </div>
              </div>
              <div class="form-group row">
                <label for="smFormGroupInput" class="col-sm-2 col-form-label col-form-label-sm">Email</label>
                <div class="col-sm-10">
                  <input type="email" class="form-control form-control-sm" id="smFormGroupInput" placeholder="you@example.com">
                </div>
              </div>
            </form>
            <div class="form-check">
              <label class="form-check-label">
                <input class="form-check-input" type="checkbox" value="">
                Option one is this and that&mdash;be sure to include why it's great
              </label>
            </div>
            <div class="form-check disabled">
              <label class="form-check-label">
                <input class="form-check-input" type="checkbox" value="" disabled>
                Option two is disabled
              </label>
            </div>
            <div class="form-check">
              <label class="form-check-label">
                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
                Option one is this and that&mdash;be sure to include why it's great
              </label>
            </div>
            <div class="form-check">
              <label class="form-check-label">
                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
                Option two can be something else and selecting it will deselect option one
              </label>
            </div>
            <div class="form-check disabled">
              <label class="form-check-label">
                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" disabled>
                Option three is disabled
              </label>
            </div>
          </div>
        </div>
      </div>
      <hr>
      <div class="row">
        <div class="col">
          <form>
            <fieldset disabled>
              <div class="form-group">
                <label for="disabledTextInput">Disabled input</label>
                <input type="text" id="disabledTextInput" class="form-control" placeholder="Disabled input">
              </div>
              <div class="form-group">
                <label for="disabledSelect">Disabled select menu</label>
                <select id="disabledSelect" class="form-control">
                  <option>Disabled select</option>
                </select>
              </div>
              <div class="checkbox">
                <label>
                  <input type="checkbox"> Can't check this
                </label>
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </fieldset>
          </form>
        </div>
      </div>
      <hr>
      <div class="row">
        <div class="col">
          <div class="form-group has-success">
            <label class="form-control-label" for="inputSuccess1">Input with success</label>
            <input type="text" class="form-control form-control-success" id="inputSuccess1">
            <div class="form-control-feedback">Success! You've done it.</div>
            <small class="form-text text-muted">Example help text that remains unchanged.</small>
          </div>
          <div class="form-group has-warning">
            <label class="form-control-label" for="inputWarning1">Input with warning</label>
            <input type="text" class="form-control form-control-warning" id="inputWarning1">
            <div class="form-control-feedback">Shucks, check the formatting of that and try again.</div>
            <small class="form-text text-muted">Example help text that remains unchanged.</small>
          </div>
          <div class="form-group has-danger">
            <label class="form-control-label" for="inputDanger1">Input with danger</label>
            <input type="text" class="form-control form-control-danger" id="inputDanger1">
            <div class="form-control-feedback">Sorry, that username's taken. Try another?</div>
            <small class="form-text text-muted">Example help text that remains unchanged.</small>
          </div>
        </div>
      </div>
      <hr>
      <div class="row">
        <div class="col">
          <div class="container">
            <form>
              <div class="form-group row has-success">
                <label for="inputHorizontalSuccess" class="col-sm-2 col-form-label">Email</label>
                <div class="col-sm-10">
                  <input type="email" class="form-control form-control-success" id="inputHorizontalSuccess" placeholder="name@example.com">
                  <div class="form-control-feedback">Success! You've done it.</div>
                  <small class="form-text text-muted">Example help text that remains unchanged.</small>
                </div>
              </div>
              <div class="form-group row has-warning">
                <label for="inputHorizontalWarning" class="col-sm-2 col-form-label">Email</label>
                <div class="col-sm-10">
                  <input type="email" class="form-control form-control-warning" id="inputHorizontalWarning" placeholder="name@example.com">
                  <div class="form-control-feedback">Shucks, check the formatting of that and try again.</div>
                  <small class="form-text text-muted">Example help text that remains unchanged.</small>
                </div>
              </div>
              <div class="form-group row has-danger">
                <label for="inputHorizontalDnger" class="col-sm-2 col-form-label">Email</label>
                <div class="col-sm-10">
                  <input type="email" class="form-control form-control-danger" id="inputHorizontalDnger" placeholder="name@example.com">
                  <div class="form-control-feedback">Sorry, that username's taken. Try another?</div>
                  <small class="form-text text-muted">Example help text that remains unchanged.</small>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <hr>
      <div class="row">
        <div class="col">
          <nav>
            <ul class="pagination">
              <li class="page-item disabled">
                <span class="page-link">Previous</span>
              </li>
              <li class="page-item"><a class="page-link" href="#">1</a></li>
              <li class="page-item active">
                <span class="page-link">
                  2
                  <span class="sr-only">(current)</span>
                </span>
              </li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item">
                <a class="page-link" href="#">Next</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <hr>
      <div class="row">
        <div class="col">
          <div class="progress mb-2">
            <div class="progress-bar bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <div class="progress mb-2">
            <div class="progress-bar bg-info" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <div class="progress mb-2">
            <div class="progress-bar bg-warning" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <div class="progress mb-2">
            <div class="progress-bar bg-danger" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <div class="progress mb-2">
            <div class="progress-bar" role="progressbar" style="width: 15%" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
            <div class="progress-bar bg-success" role="progressbar" style="width: 30%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
            <div class="progress-bar bg-info" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <div class="progress mb-2">
            <div class="progress-bar progress-bar-striped" role="progressbar" style="width: 10%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <div class="progress mb-2">
            <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <div class="progress mb-2">
            <div class="progress-bar progress-bar-striped bg-info" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <div class="progress mb-2">
            <div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <div class="progress mb-2">
            <div class="progress-bar progress-bar-striped bg-danger" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
      </div>
    </div>
<?php include("inc/footer.php"); ?>
