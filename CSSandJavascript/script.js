function fetchPosts() {
    fetch('http://blogpage.local/wp-json/wp/v2/posts')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(posts => {
            const container = document.getElementById('posts');
            container.innerHTML = posts.map(post =>
                `<div>
                <h2>${post.title.rendered}</h2>
                <div>${post.content.rendered}</div>
            </div>`
            ).join('');
        })
        .catch(error => {
            console.error('Error fetching posts:', error);
            document.getElementById('posts').innerHTML = 'Failed to load posts.';
        });
}

fetchPosts();

let slideIndex = 0;
showSlides(slideIndex);

function moveSlide(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("carousel-slide");
    if (n >= slides.length) { slideIndex = 0; }
    if (n < 0) { slideIndex = slides.length - 1; }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}
