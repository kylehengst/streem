<template>
  <div class="position-relative my-6">
    <div
      class="h-px bg-gray-300 position-absolute z-1 left-0 top-1/2 right-0 rounded-full"
    ></div>
    <div
      class="flex justify-center position-absolute z-1 left-0 top-1/2 right-0"
    >
      <div class="bg-gray-100 z-10 -m-3 px-3 font-bold">
        <slot>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
            />
          </svg>
        </slot>
      </div>
    </div>
  </div>
</template>
