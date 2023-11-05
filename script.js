// const buttons = document.querySelectorAll('.select_feature__item");
// const features = document.querySelectorAll(".feature");

// buttons.forEach((button, i) => {
//   button.addEventListener("click", () => {
//     // remove all active classes first
//     buttons.forEach((button) => {
//       const iconCircle = button.querySelector(
//         ".select_feature_circle__progress"
//       );
//       const icon = button.querySelector(".select_feature_icon__icon");
//       button.classList.remove("select_feature__item--active");
//       iconCircle.classList.remove("select_feature_circle__progress--active");
//       icon.classList.remove("select_feature_icon__icon--active");
//     });
//     // Add active class if button doesn't have.
//     if (!button.classList.contains("select_feature__item--active")) {
//       button.classList.add("select_feature__item--active");
//       iconCircle.classList.add("select_feature_circle__progress--active");
//       icon.classList.add("select_feature_icon__icon--active");
//     } else {
//       button.classList.remove("select_feature__item--active");
//       iconCircle.classList.remove("select_feature_circle__progress--active");
//       icon.classList.remove("select_feature_icon__icon--active");
//     }

//     for (let j = 0; j < features.length; j++) {
//       if (j === i) {
//         features[j].style.display = "flex";
//       } else {
//         features[j].style.display = "none";
//       }
//     }
//   });
// });

//

// Refactor
const buttons = document.querySelectorAll('.select_feature__item')
const features = document.querySelectorAll('.feature')

buttons.forEach((button, i) => {
  button.addEventListener('click', () => {
    buttons.forEach((btn, index) => {
      const circle = btn.querySelector('.select_feature_circle__progress')
      const btnIcon = btn.querySelector('.select_feature_icon__icon')

      const isActive = index === i

      btn.classList.toggle('select_feature__item--active', isActive)
      circle.classList.toggle('select_feature_circle__progress--active', isActive)
      btnIcon.classList.toggle('select_feature_icon__icon--active', isActive)

      features[index].style.display = isActive ? 'flex' : 'none'
    })
  })
})
