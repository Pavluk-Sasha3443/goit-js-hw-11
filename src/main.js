import fetchData from './js/pixabay-api';
import createMarkup from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const form = document.querySelector('.form-search');
const gallery = document.querySelector('.js-gallery');
const loader = document.querySelector('.loader');
let lightbox;

form.addEventListener('submit', querySearch);

function querySearch(event) {
  event.preventDefault();
  loader.style.display = 'block';

  const inputVal = event.target.elements.query.value.trim();

  if (inputVal === '') {
    iziToast.show({
      title: 'Error',
      message:
        'Sorry, you need to enter data for the request. Please try again!',
      position: 'topRight',
      color: 'red',
    });
    loader.style.display = 'none';
  } else {
    fetchData(inputVal)
      .then(response => {
        if (response.hits.length === 0) {
          iziToast.show({
            title: 'Error',
            message:
              'Sorry, there are no images matching your search query. Please try again!',
            position: 'topRight',
            color: 'red',
          });
        }

        const markup = createMarkup(response.hits);
        gallery.innerHTML = markup;
        loader.style.display = 'none';

        if (lightbox) {
          lightbox.refresh();
        } else {
          lightbox = new SimpleLightbox('.gallery a');
        }

        console.log(response.hits.length);
      })
      .catch(error => {
        console.log(error);

        iziToast.show({
          title: 'Error',
          message:
            ' Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
          color: 'red',
        });
      });
  }
}
