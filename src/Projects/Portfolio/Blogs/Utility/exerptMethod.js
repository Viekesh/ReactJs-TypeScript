export const exerpt = (str, count) => {

    if(str.length > count) {
        str = str.substring(0, count) + "...";
    }

    return str;
}



// Here we have create a function to use exerpt method. A exerpt method which will basically use to short our blog description on "Blogs" page.