const url = 'https://app.purpleschool.ru/course/javascript';

function urlDecompose(url) {
    const[https, app, course, js] = url.split('/').filter(i => i);
    console.log(`Протокол: ${https}`)
    console.log(`Доменное имя: ${app}`)
    console.log(`Путь внутри сайта: /${course.concat("/", js)}`)
}

urlDecompose(url);