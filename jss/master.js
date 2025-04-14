document.addEventListener (' DOMContentLoaded', function() {  
    //Toggle menu functionality 
    const toggle = document.getElementById('toggle');
    const menu = document.getElementById ('menu');
    
    toggle.addEventListener( 'click' , function() {   
    menu.classlist.toggle('open');
    });

    //popup window of the gallery
    if(document.body.classList.contains('.gallery')){


    const image = document.querySelector('g.gallery-image');
    const popup = document.getElementById('popup');
    const popupcontent = document .getElementById('popup_image');
    const close = document.getElementById('close');

    document.addEventListener('click' , function(event){
        if(event. target. classList.contains('galery-image')) {
           const src = event. targert.src;
           const img = document.createElement('img');
           img.src =src;
           popupcontent.appendChild(img);
           popup.classList.add('open');
        }
    });

    close.addEventListener('click' ,function() {
        const img = popupcontent.querySelector('img');
        if(img) {
            popupcontent.removeChild(img);
        }
        popup.classList.remove('open');
    });
}
    
});

<script>
  document.getElementById('searchInput').addEventListener('input', function () {
    const query = this.value.toLowerCase();
    const blocks = document.querySelectorAll('.searchable');

    blocks.forEach(block => {
      const text = block.innerText.toLowerCase();
      block.style.display = text.includes(query) ? 'block' : 'none';
    });
  });
</script>
