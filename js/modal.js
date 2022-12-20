const modalBtns = document.querySelectorAll('.modal-open');

modalBtns.forEach(function(btn){
    btn.onclick = function(){
        const modal = btn.getAttribute('data-modal');

        document.getElementById(modal).style.display = 'block';
    }
})
const closeBtn = document.querySelectorAll(".modal-close");

closeBtn.forEach(function(btn){
    btn.onclick = function() {
        const modal = (btn.closest(".modal").style.display = "none");
        console.log(modal);
    }
})