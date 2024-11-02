document.getElementById('toggle-button').addEventListener('click', function() {
    const currentPage = document.body.getAttribute('data-page');

    let targetPage = '';
    switch (currentPage) {
        case 'section_un':
            targetPage = 'section_un_inverse.html';
            break;
        case 'section_un_inverse':
            targetPage = 'section_un.html';
            break;
        case 'section_deux':
            targetPage = 'section_deux_inverse.html';
            break;
        case 'section_deux_inverse':
            targetPage = 'section_deux.html';
            break;
        case 'section_trois':
            targetPage = 'section_trois_inverse.html';
            break;
        case 'section_trois_inverse':
            targetPage = 'section_trois.html';
            break;
        case 'section_quatre':
            targetPage = 'section_quatre_inverse.html';
            break;
        case 'section_quatre_inverse':
            targetPage = 'section_quatre.html';
            break;
        case 'section_cinq':
            targetPage = 'section_cinq_inverse.html';
            break;
        case 'section_cinq_inverse':
            targetPage = 'section_cinq.html';
            break;
        case 'section_un_en':
            targetPage = 'section_un_inverse_en.html';
            break;
        case 'section_un_inverse_en':
            targetPage = 'section_un_en.html';
            break;
        case 'section_deux_en':
            targetPage = 'section_deux_inverse_en.html';
            break;
        case 'section_deux_inverse_en':
            targetPage = 'section_deux_en.html';
            break;
        case 'section_trois_en':
            targetPage = 'section_trois_inverse_en.html';
            break;
        case 'section_trois_inverse_en':
            targetPage = 'section_trois_en.html';
            break;
        case 'section_quatre_en':
            targetPage = 'section_quatre_inverse_en.html';
            break;
        case 'section_quatre_inverse_en':
            targetPage = 'section_quatre_en.html';
            break;
        case 'section_cinq_en':
            targetPage = 'section_cinq_inverse_en.html';
            break;
        case 'section_cinq_inverse_en':
            targetPage = 'section_cinq_en.html';
            break;
        default:
            console.error('Page inconnue');
            return;
    }
    window.location.href = targetPage;
});