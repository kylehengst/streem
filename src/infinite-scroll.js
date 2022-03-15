const onScroll = (evt) => {
  // console.log(
  //   evt.target.scrollHeight - evt.target.scrollTop - props.buffer,
  //   evt.target.offsetHeight
  // );
  let offset = parseInt(evt.target.getAttribute("iscroll-offset"));
  if (isNaN(offset)) offset = 0;
  if (
    evt.target.scrollHeight - Math.round(evt.target.scrollTop) - offset <=
    evt.target.offsetHeight
  ) {
    evt.target.dispatchEvent(new Event("iscroll-end"));
  }
};

// let settings = {
//   offset: 30,
//   onScrollEnd: null,
// };

const iscroll = {
  created(el, binding) {
    console.log(binding);
    // settings = { ...settings, ...binding.value };
    el.addEventListener("scroll", onScroll);
  },
  mounted: (el) => {
    console.log(el);
  },
  beforeUnmount: (el) => {
    el.removeEventListener("scroll", onScroll);
  },
};

export { iscroll };
