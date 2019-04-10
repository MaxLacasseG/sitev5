(() => {
    function clamp(num, min, max) {
        return num <= min ? min : num >= max ? max : num;
    }
    window.addEventListener("DOMContentLoaded", () => {
        var logo = document.querySelector(".logo");
        document.addEventListener("mousemove", event => {
            var x = clamp((event.clientX * 100) / window.innerWidth, 48, 52) + "%";
            var y = clamp((event.clientY * 100) / window.innerHeight, 48, 52) + "%";
            logo.style.left = x;
            logo.style.top = y;
        });
    });
})(window);
