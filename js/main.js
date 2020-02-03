console.log('Starting up');

$(document).ready(onInit())

function onInit() {
    renderPortfolio()
}

function renderPortfolio() {
    var projects = getProjs()
    var strHTMLs = projects.map(function (project, idx) {
        return `
        <div class="col-md-4 col-sm-6 portfolio-item">
        <a class="portfolio-link" data-toggle="modal" href=#portfolioModal${idx} onclick="renderModal(${idx})">
          <div class="portfolio-hover">
            <div class="portfolio-hover-content">
              <i class="fa fa-plus fa-3x"></i>
            </div>
          </div>
          <img class="img-fluid" src="${project.img}" alt="">
        </a>
        <div class="portfolio-caption">
          <h4>${project.name}</h4>
          <p class="text-muted">${project.txt}</p>
        </div>
      </div>
        `
    })
    var elPortfolio = document.querySelector('.portfolio-main');
    elPortfolio.innerHTML = strHTMLs.join('');
}

function renderModal(idx) {
    var modals = getProjs()
    var modal = modals[idx]
    var strHTML = `
        <div class="portfolio-modal modal fade" id="portfolioModal${idx}" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="close-modal" data-dismiss="modal">
          <div class="lr">
            <div class="rl"></div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-8 mx-auto">
              <div class="modal-body">
                <!-- Project Details Go Here -->
                <h2>${modal.name}</h2>
                <p class="item-intro text-muted">${modal.txt}</p>
                <img class="img-fluid d-block mx-auto" src=${modal.img} alt="">
                <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis
                  dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate,
                  maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                <ul class="list-inline">
                  <li>Date: ${modal.date}</li>
                  <li>Client: ${modal.client}</li>
                  <li>Category: ${modal.category}</li>
                </ul>
                <button class="btn btn-primary" data-dismiss="modal" type="button">
                    <i class="fa fa-times"></i>
                    Close Project</button>
                    <button class="btn btn-primary" type="button" onclick="onOpenProject(${idx})">
                    Check It Out!</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
        `
    var elModals = document.querySelector('.modals-main');
    elModals.innerHTML = strHTML;
}

function onOpenProject(idx) {
    var projects = getProjs()
    var project = projects[idx]
    window.open(project.href, '_blank');
}

 function sendEmail(){
     $email = $('.email-form').val()
     $subject = $('.subject-form').val()
     $comment = $('.comment-form').val()
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${$email}.com&su=${$subject}&body=${$comment}`, `_blank`)
 }