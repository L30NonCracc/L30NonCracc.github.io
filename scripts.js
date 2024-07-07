document.addEventListener('DOMContentLoaded', function() {
    const overlay = document.querySelector('.overlay');
    const gifContainer = document.querySelector('.gif-container');
    const imageContainer = document.querySelector('.image-container');
    const image = document.getElementById('image');

    // Fade out the overlay after the document loads
    setTimeout(() => {
        overlay.style.opacity = '0';
    }, 500);

    // Show the GIF for 7.10 seconds
    setTimeout(() => {
        gifContainer.style.display = 'none';
        overlay.style.zIndex = '-1';
    }, 7100); 

    // Fade out the image after 7.10 seconds
    setTimeout(() => {
        // image.style.zIndex = '3';
        imageContainer.style.display = 'flex';
        setTimeout(() => {
            image.style.opacity = '1';
        }, 10);
    }, 7000);

    setTimeout(() => {
        image.style.transition = 'opacity 0.5s';
        image.style.opacity = '0';
        image.style.zIndex = '-1';
        setTimeout(() => {
            imageContainer.style.display = 'none';
        }, 500);
    }, 7600)
    

    let status = false;
    const popupWindow = document.getElementById('popup-window');
    const boxes = document.querySelectorAll('#box');
    const popbox1 = document.getElementById('popbox1')
    const popbox2 = document.getElementById('popbox2')
    const popbox3 = document.getElementById('popbox3')
    const popbox4 = document.getElementById('popbox4')

    function showPopbox(className) {
        switch (className) {
            case "box1":
                popupWindow.classList.remove('hidden1');
                popbox1.classList.remove('hidden1');
                popbox1.classList.remove('hidden');
                popbox1.classList.add('show');
                console.log("box1");
                break;
            case "box2":
                popupWindow.classList.remove('hidden1');
                popbox2.classList.remove('hidden1');
                popbox2.classList.remove('hidden');
                popbox2.classList.add('show');
                console.log("box2");
                break;
            case "box3":
                popupWindow.classList.remove('hidden1');
                popbox3.classList.remove('hidden1');
                popbox3.classList.remove('hidden');
                popbox3.classList.add('show');
                console.log("box3");
                break;
            case "box4":
                popupWindow.classList.remove('hidden1');
                popbox4.classList.remove('hidden1');
                popbox4.classList.remove('hidden');
                popbox4.classList.add('show');
                console.log("box4");
                break;
        }
    }

    function hideAllPopboxes() {
        popbox1.classList.add('hidden');
        popbox2.classList.add('hidden');
        popbox3.classList.add('hidden');
        popbox4.classList.add('hidden');
        popbox1.classList.remove('show');
        popbox2.classList.remove('show');
        popbox3.classList.remove('show');
        popbox4.classList.remove('show');
    }

    function togglePopupWindow(className) {
        if (!status) {
            status = true;
            popupWindow.classList.remove('hidden');
            popupWindow.classList.add('show');
            showPopbox(className);
            console.log('Class Name:', className);
        } else {
            status = false;
            popupWindow.classList.remove('show');
            popupWindow.classList.add('hidden');
            hideAllPopboxes();
        }
    }

    boxes.forEach(box => {
        box.addEventListener('click', function() {
            const className = box.className;
            togglePopupWindow(className);
        });
    });

    popupWindow.addEventListener('click', function() {
        togglePopupWindow();
    });
});