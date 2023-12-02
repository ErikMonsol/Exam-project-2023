let currentPostIndex = 0;
const postsPerLoad = 5; // Load 5 posts each time the "View More" is clicked
const maxPosts = 20; // Maximum of 20 boxes
const container = document.getElementById('blogPosts');
let loadedPosts = 10; // Initially load 10 posts

const postNumberToApiIdMap = {
    1: 1,  // Map displayed post number 1 to API ID 1
    2: 21, // Map displayed post number 2 to API ID 21
    3: 23, // Map displayed post number 3 to API ID 23
    4: 25, // Map displayed post number 4 to API ID 25
    5: 27, // Map displayed post number 5 to API ID 27
    6: 29, // Map displayed post number 6 to API ID 29
    7: 32, // Map displayed post number 7 to API ID 32
    8: 34, // Map displayed post number 8 to API ID 34
    9: 36, // Map displayed post number 9 to API ID 36
    10: 38, // Map displayed post number 10 to API ID 38
    11: 40, // Map displayed post number 11 to API ID 40
    12: 42, // Map displayed post number 12 to API ID 42
    // Add more mappings as needed
};

// Image placeholders for tech blog
const imagePlaceholders = [
    'ImageAndSvg/1stBlogHeaderImage.png',
    'ImageAndSvg/BlogPostImage2.jpg',
    'ImageAndSvg/BlogPost3ImageHeader.jpg',
    'ImageAndSvg/FourthImageHeader.jpg',
    'ImageAndSvg/WebTelescopHeaderImage.jpg',
    'ImageAndSvg/blogSixthMeta.jpg',
    'ImageAndSvg/BlogSeventhTesla.jpg',
    'ImageAndSvg/blogEigthEvernote.jpg',
    'ImageAndSvg/BlogNinthImageHeader.jpg',
    'ImageAndSvg/blogTenthImageHeader.jpg',
    'ImageAndSvg/blogElleventhImageHeader.jpg',
    'ImageAndSvg/TwelthImageHeaderjpg.jpg',
    // Add more image placeholders as needed
];

const posts = [
    { title: "Newest gadgets on the market", url: "blogPost1.html" },
    { title: "Neuralink, Elon Musk’s brain implant startup, quietly raises an additional $43M", url: "blogPost2.html" },
    { title: "NVIDIA Accused of Trade Secret Theft After Screenshare Error Reveals Competitor's Code", url: "blogPost3.html" },
    { title: "OnePlus 12 with Snapdragon 8 Gen 3 will debut in China on December 5", url: "blogPost4.html" },
    { title: "Webb telescope images show an unprecedented and ‘chaotic’ view of the center of our galaxy", url: "blogPost5.html" },
    { title: "Unsealed complaint says Meta ‘coveted’ under-13s and deceives the public about age enforcement", url: "blogPost6.html" },
    { title: "Tesla sues Sweden for blocking license plate deliveries during labor strike", url: "blogPost1.html" },
    { title: "Neuralink, Elon Musk’s brain implant startup, quietly raises an additional $43M", url: "blogPost2.html" },
    { title: "Neuralink, Elon Musk’s brain implant startup, quietly raises an additional $43M", url: "blogPost3.html" },
    { title: "Neuralink, Elon Musk’s brain implant startup, quietly raises an additional $43M", url: "blogPost4.html" },
    { title: "Neuralink, Elon Musk’s brain implant startup, quietly raises an additional $43M", url: "blogPost5.html" },
    { title: "Neuralink, Elon Musk’s brain implant startup, quietly raises an additional $43M", url: "blogPost6.html" }
    // ... (other posts)
];


document.addEventListener('DOMContentLoaded', function () {
    loadPosts(1, 10); // Load initial 10 posts
});

function loadPosts(startIndex, postsCount) {
    let endIndex = Math.min(startIndex + postsCount - 1, maxPosts);
    for (let i = startIndex; i <= endIndex; i++) {
        const newBox = document.createElement('div');
        const apiId = postNumberToApiIdMap[i];

        newBox.onclick = function () {
            let url;
            switch (apiId) {
                case 1: url = 'blogOne.html?post=' + apiId; break;
                case 21: url = 'blogTwo.html?post=' + apiId; break;
                case 23: url = 'blogThree.html?post=' + apiId; break;
                case 25: url = 'blogFourth.html?post=' + apiId; break;
                case 27: url = 'blogFive.html?post=' + apiId; break;
                case 29: url = 'blogSix.html?post=' + apiId; break;
                case 32: url = 'blogSeven.html?post=' + apiId; break;
                case 34: url = 'blogEight.html?post=' + apiId; break;
                case 36: url = 'blogNine.html?post=' + apiId; break;
                case 38: url = 'blogTenth.html?post=' + apiId; break;
                case 40: url = 'blogElleventh.html?post=' + apiId; break;
                case 42: url = 'blogTwelth.html?post=' + apiId; break;
                default: url = 'blogPost.html?post=' + apiId; break;
            }
            window.location.href = url;
        };

        // Set the inner content of newBox
        newBox.innerHTML = `
    <h3>${i <= posts.length ? posts[i - 1].title : `Read Post ${i}`}</h3>
    <img src="${imagePlaceholders[i - 1]}" alt="Post Image">
`;

        container.appendChild(newBox);
    }
    loadedPosts = endIndex;

    if (loadedPosts >= maxPosts) {
        document.getElementById('viewMore').style.display = 'none';
    }
}

document.getElementById('viewMore').addEventListener('click', function () {
    loadPosts(loadedPosts + 1, postsPerLoad);
});


