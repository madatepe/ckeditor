<template>
  <div>
    <ckeditor
      :editor="editor"
      v-model="editorData"
      :config="editorConfig"
    />
  </div>
</template>

<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-inline';
import CKEditor from '@ckeditor/ckeditor5-vue';

export default {
  components: {
    ckeditor: CKEditor.component,
  },
  data() {
    return {
      editor: ClassicEditor,
      editorData: `<h3 class="underline aassdd bg-red-400"> Mert </h3>`,
      editorConfig: {
        htmlSupport: {
            allow: [
                {
                    name: /^.*$/,
                    styles: true,
                    attributes: true,
                    classes: true
                }
            ]
        },
      },
    };
  },
};
</script>

<style>
@import 'ckeditor-tailwind-reset/ckeditor-tailwind-reset';
</style>
<!-- editorData: `<div class="is-section is-box is-section-auto"><div class="is-overlay"></div><div class="is-boxes"><div class="is-box-centered"><div class="is-container v2 is-content-none w-full"><div style="display:contents!important"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin=""><link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;0,700;1,400&amp;display=swap" rel="stylesheet"><link href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@300;400;500;700&amp;display=swap" rel="stylesheet"><div class="flex mx-auto max-w-[1155px] justify-between pt-[100px] max-md:pt-[30px]"><div class="flex relative"><h2 class="max-lg:w-full w-[555px] text-[44px] max-sm:text-[40px] max-sm:leading-[44px] ml-[7px] max-sm:ml-0 max-sm:mb-0 max-sm:p-[15px] max-sm:pt-0 max-[1100px]:mt-[15px] mb-[20px] leading-[56px]" style="font-family:'Cormorant Garamond',serif">Vel illum qui dolorem eum fugiat quo voluptas</h2></div></div><div class="mx-auto max-sm:pb-[15px] pb-[60px] mt-[30px] max-sm:mt-0 grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 max-w-[1170px]" style="font-family:'Hanken Grotesk',sans-serif"><div class="mb-[40px] max-sm:mb-[15px] px-[15px]"><h4 class="text-[28px] mb-4 font-light tracking-[0.3px] leading-10 text-[#003027]">Commodi Consequatur</h4><p class="text-[18px] font-light leading-8">Sed ut perspiciatis unde omnis iste natus error sit voluptatem ac.</p></div><div class="mb-[40px] max-sm:mb-[15px] px-[15px]"><h4 class="text-[28px] mb-4 font-light tracking-[0.3px] leading-10 text-[#003027]">At vero eos et</h4><p class="text-[18px] font-light leading-8">Sed ut perspiciatis unde omnis iste natus error sit voluptatem ac.</p></div><div class="mb-[40px] max-sm:mb-[15px] px-[15px]"><h4 class="text-[28px] mb-4 font-light tracking-[0.3px] leading-10 text-[#003027]">Molestias Excepturi</h4><p class="text-[18px] font-light leading-8">Sed ut perspiciatis unde omnis iste natus error sit voluptatem ac.</p></div><div class="mb-[40px] max-sm:mb-[15px] px-[15px]"><h4 class="text-[28px] mb-4 font-light tracking-[0.3px] leading-10 text-[#003027]">Nobis est eligendi</h4><p class="text-[18px] font-light leading-8">Sed ut perspiciatis unde omnis iste natus error sit voluptatem ac.</p></div><div class="mb-[40px] max-sm:mb-[15px] px-[15px]"><h4 class="text-[28px] mb-4 font-light tracking-[0.3px] leading-10 text-[#003027]">Libero tempore</h4><p class="text-[18px] font-light leading-8">Sed ut perspiciatis unde omnis iste natus error sit voluptatem ac.</p></div><div class="mb-[40px] max-sm:mb-[15px] px-[15px]"><h4 class="text-[28px] mb-4 font-light tracking-[0.3px] leading-10 text-[#003027]">Placeat facere</h4><p class="text-[18px] font-light leading-8">Sed ut perspiciatis unde omnis iste natus error sit voluptatem ac.</p></div></div></div></div></div></div></div>`, -->