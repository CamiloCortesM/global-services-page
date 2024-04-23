type FormType = {
  [key: string]: string;
};
export const servicesForms: FormType = {
  'Regular Cleaning': `<div
  class="flex justify-between items-center w-full px-5 md:px-20 my-2 pb-5 border-b-4 border-dotted"
>
  <label for="bedrooms" class="font-semibold text-lg text-muted"
    >Bedrooms <span class="text-red-500">*</span></label
  >
  <div
    class="h-10 w-28 bg-gray-50 flex border border-gray-200 rounded items-center mt-1"
  >
    <button
      type="button"
      id="decrement-button-bedrooms"
      data-input-counter="quantity-bedrooms"
      data-operation="decrement"
      class="cursor-pointer outline-none focus:outline-none border-r border-gray-200 transition-all text-gray-500 hover:text-blue-600"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4 mx-2"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clip-rule="evenodd"></path>
      </svg>
    </button>
    <input
      name="bedrooms"
      maxlength="1"
      min="1"
      value="1"
      oninput="this.value = this.value.replace(/[^1-9]/g, '');"
      type="text"
      id="quantity-bedrooms"
      class="px-2 text-center appearance-none outline-none text-gray-800 w-full bg-transparent"
      required
    />
    <button
      type="button"
      id="increment-button-bedrooms"
      data-input-counter="quantity-bedrooms"
      data-operation="increment"
      class="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-500 hover:text-blue-600"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4 mx-2 fill-current"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
          clip-rule="evenodd"></path>
      </svg>
    </button>
  </div>
</div>
<div
  class="flex justify-between items-center w-full px-5 md:px-20 my-2 pb-5 border-b-4 border-dotted"
>
  <label for="bathrooms" class="font-semibold text-lg text-muted"
    >Bathrooms <span class="text-red-500">*</span></label
  >
  <div
    class="h-10 w-28 bg-gray-50 flex border border-gray-200 rounded items-center mt-1"
  >
    <button
      type="button"
      id="decrement-button-bathrooms"
      data-input-counter="quantity-bathrooms"
      data-operation="decrement"
      class="cursor-pointer outline-none focus:outline-none border-r border-gray-200 transition-all text-gray-500 hover:text-blue-600"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4 mx-2"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clip-rule="evenodd"></path>
      </svg>
    </button>
    <input
      name="bathrooms"
      type="text"
      id="quantity-bathrooms"
      class="px-2 text-center appearance-none outline-none text-gray-800 w-full bg-transparent"
      maxlength="1"
      min="1"
      value="1"
      oninput="this.value = this.value.replace(/[^1-9]/g, '');"
      required
    />
    <button
      type="button"
      id="increment-button-bathrooms"
      data-input-counter="quantity-bathrooms"
      data-operation="increment"
      class="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-500 hover:text-blue-600"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4 mx-2 fill-current"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
          clip-rule="evenodd"></path>
      </svg>
    </button>
  </div>
</div>
<div
  class="flex-row justify-between items-center w-full px-2 md:px-20 my-2 pb-5"
>
  <h3 class="mb-5 text-xl font-medium text-gray-900">
    Additional tasks:
  </h3>

  <ul class="grid w-full gap-2 md:gap-6 md:grid-cols-3">
    <li class="h-full">
      <input
        type="checkbox"
        id="kitchen-option"
        name="kitchen"
        class="hidden peer"
      />
      <label
        for="kitchen-option"
        class="inline-flex h-44 items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-[#494f8c] peer-checked:bg-[#494f8c] hover:text-gray-600 peer-checked:text-white hover:bg-gray-50"
      >
        <div class="block">
          <svg
            class="mb-2 w-16 h-16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            ><path
              fill="currentColor"
              d="m7.424 16.122l.176-.029l.899 5.573l-.176.029zm-2.401 5.506l.625-5.53l.177.02l-.625 5.53zM7.99 19.71l-.028-.178H5.45l-.02.178zm-.894-3.56l.388 3.371h.18l-.392-3.393zm.632 3.941l-.042-.37h-.179l.045.39zm-3.114-.005l.658-3.994l.175.03l-.658 3.993zm2.735-1.642l-1.777-.011l-.02.177l1.818.012zm-2.3.163l.303.002l.02-.178l-.295-.002zm1.13.018l.393.896h.194l-.392-.895zm-.954-3.269c-.054.079-.245.417-.176.6h1.8l1.608-.016a.46.46 0 0 0 .091-.416a.65.65 0 0 0-.275-.389a1.07 1.07 0 0 0-.63-.2h-.017l-1.564.021a1.05 1.05 0 0 0-.487.124a.94.94 0 0 0-.35.276m-.3.354a1.5 1.5 0 0 1 .193-.429a1 1 0 0 1 .36-.3a4 4 0 0 0-.566.05c-.09.022-.2.061-.226.116s0 .1.035.2a4 4 0 0 0 .203.363m7.703.462l.175-.028l.9 5.573l-.176.028zm-2.398 5.495l.623-5.531l.177.02l-.623 5.531zm2.965-1.907l-.028-.177h-2.514l-.02.177zm-.262.382l-.042-.371h-.179l.045.391zm-.065-.57l-.39-3.393l-.177.02l.388 3.373zm-3.05.565l.659-3.994l.175.029l-.658 3.994zm.435-1.48l.304.002l.02-.177l-.295-.002zm2.301-.162l-1.777-.012l-.02.178l1.817.012zm-1.17.181l.393.896h.194l-.392-.895zm2.092-3.49a1.06 1.06 0 0 0-.63-.2h-.015l-1.564.021a1.06 1.06 0 0 0-.487.123a.94.94 0 0 0-.35.28c-.055.079-.245.417-.176.6h1.8l1.608-.014a.45.45 0 0 0 .091-.415a.65.65 0 0 0-.277-.395m-3.153.148a1 1 0 0 1 .358-.3a5 5 0 0 0-.565.049c-.089.023-.2.062-.225.117s0 .1.035.2a4 4 0 0 0 .2.366a1.5 1.5 0 0 1 .197-.432m6.744-7.503h2.486v.337h-2.486zm0-1.783h2.486v.343h-2.486zM5.258 5.035l-.983-.13v3.9h.983zM5.12 8.558h-.683V5.205l.683.07zm10.452.244h1.287V4.95h-1.287zm.21-3.6h.845v3.356h-.846zm-1.523 3.6h1.252V4.95h-1.252zm.272-3.6h.777v3.356h-.777zm-7.05 3.6h2V5.035h-2zm.284-3.5H9.2v3.256H7.764zm-2.277 3.5h1.935V5.035H5.487zm.26-3.5h1.4v3.256h-1.4zM2.352 2.476h.318v6.548h-.318zm.376 6.548h.37l.03-5.917l-.387-.566zm.426 0h.832v-4.5l-.8-1.323Zm2.186-4.26L4.09 4.58v4.444h1.252zm-.024 4.1h-1.1v-4.03l1.1.145zm4.241-4.097H5.4v4.257h4.16zM9.542 8.86H5.43V4.98h4.113zm4.15.155l.33-.034V4.706l-.33.212zm3.281-4.333H14.11v4.3h2.863zm-.06 4.178h-2.71V4.891h2.71zM5.057 11.077l.356-.042a.13.13 0 0 0 .092-.06l.174-.3q-.235.042-.472.064l-.376.036a3 3 0 0 1-.287.012H4.31l.188.23a.13.13 0 0 0 .09.045zM4.7 10.67c0-.074-.04-.126-.076-.126s-.075.052-.075.126v.027h.148zm-.442-.115a.136.136 0 0 0 .2.12a.24.24 0 0 1 .06-.167a.135.135 0 0 0-.262.051zm.776.024a.15.15 0 0 0 .024.084l.141-.013l.145-.016a.2.2 0 0 0 .01-.055a.161.161 0 0 0-.32 0m.581.015a.14.14 0 0 0-.138-.124a.2.2 0 0 0-.055.012a.24.24 0 0 1 .02.1v.043zm-.684-.05a.09.09 0 0 0-.088.088a.1.1 0 0 0 .016.05l.107-.01a.2.2 0 0 1-.019-.093v-.033zm2.463.084v.16l.054.174a.084.084 0 0 0 .08.06l.3-.001a.08.08 0 0 0 .078-.052l.077-.192a.1.1 0 0 0 .006-.032v-.117a.084.084 0 0 0-.083-.084h-.428a.084.084 0 0 0-.084.084m8.724-.049v.308l.013.031a.034.034 0 0 0 .032.023h.338a.04.04 0 0 0 .033-.023v-.339a.035.035 0 0 0-.035-.035h-.34a.035.035 0 0 0-.04.035m.045-.122h.08v-.335h-.08zm.238 0h.092v-.385h-.092v.135zm-.1-.192h.042v.192h-.042zm-9.084-.116l.057.148l.131.177a.2.2 0 0 1 .068-.017l.038-.276l.134-.185l-.045-.061l-.01-.04l-.118-.047l-.148.093l.183.041l-.1.3zm.85-.202l-.024.372l-.072.15a.1.1 0 0 1 .042.021l.08-.164l.283-.24l-.1-.185zm-.41.444l-.02-.048l-.09.114h.067zm-.355-.31l-.04-.093l-.042-.01l-.072.08zm.476-.17l-.06.083l.095.124l-.035.045H7.8l.2-.316l-.256-.135l-.128.06l.022.082zm4.085.545h.115v.25h-.115zm.143-1.003a.7.7 0 0 0-.036-.255a.35.35 0 0 0-.075-.149a.17.17 0 0 0-.093-.06a.16.16 0 0 0-.105.019c-.043.025-.067.072-.084.168a1.5 1.5 0 0 0-.006.325h.058a1.4 1.4 0 0 1 .005-.309c.017-.094.037-.118.056-.129a.1.1 0 0 1 .065-.013a.12.12 0 0 1 .061.043a.3.3 0 0 1 .062.124a.7.7 0 0 1 .034.238a1 1 0 0 1-.072.3a.57.57 0 0 0-.054.291a2 2 0 0 1 .048.362h.058a2 2 0 0 0-.05-.375a.55.55 0 0 1 .052-.26a1 1 0 0 0 .076-.32m-.34.66l.073.076v-.077l-.074-.072v-.487h-.06v.054l-.019.973h-.033v.342h.16l.004-.337h-.052zM9.905 7.18h3.28v.132h-3.28Zm0-.273h3.28v.132h-3.28Zm0-.536h3.28v.357h-3.28zm1.635 3.51H9.833V6.245h3.45V9.88h-1.368l-.018.087h1.473V6.158H9.746v3.81h1.794zm-8.772.533l.1.554l.157-.059v-.544zm5.302.396l-.028.068h3.452v-.355h.035v-.179H8.158l-.022.02l-.078.172a.2.2 0 0 1 .027.093v.117a.2.2 0 0 1-.014.064m8.567.068v-.534h-.087v.124a.12.12 0 0 1 .074.112v.3zm-13.525 0h1.164l-.153-.187h.1a.22.22 0 0 1-.047-.136a.225.225 0 0 1 .152-.212H3.113zm2.26-.468a.2.2 0 0 1 .1-.026a.23.23 0 0 1 .224.195h.008l.141-.028l-.189.328h1.677l-.019-.063a.2.2 0 0 1-.008-.05v-.136a.17.17 0 0 1 .05-.12l-.12-.165H5.27a.24.24 0 0 1 .103.065m-.777.051h.028a.16.16 0 0 1 .144.112a.18.18 0 0 1 .163-.112a.2.2 0 0 1 .045.006a.25.25 0 0 1 .143-.12h-.653a.22.22 0 0 1 .13.114m11.51.007v-.124h-4.16v.055h.086v.366h-.23v-.366h.042v-.055h-.12v.184h.052v.35h4.26v-.3a.12.12 0 0 1 .07-.11M5.432 11.57v-.179l-2.762-.032l-.058-.248l.18-.078l-.104-.573l-.064-.238h-.35v1.597l2.81.028h.007v.189zm.125-.33H17.83v.13H5.558zm8.016 1.345l-.02-.02l-.128-.075l.567.3v-.544h-.979l-.2-.116h1.174v-.7H10.24v.7h-.116v-.7h-.275v.7h-.116v-.7H7.094v.7H4.767l-.009.006h-.006l.177-.228l-2.655-.026h.246v1.251h12.088zm-4.062-.738h-2.19a.073.073 0 0 1 0-.145h2.19a.073.073 0 1 1 0 .145m6.991-.818h-.338a.12.12 0 0 1-.087-.037L8 10.983l-.008.02a.17.17 0 0 1-.158.106h-.3a.17.17 0 0 1-.163-.12v-.007H5.606l-.02.035a.21.21 0 0 1-.156.1l-.36.047l-.48-.024a.21.21 0 0 1-.154-.077l-.078-.084h-1.25l-.419.205l.028.119l2.655.03l.12-.155h12.3l-.79-.181h-.415a.12.12 0 0 1-.084.032m-6.2.124l-.122-.117h3.12l.326.116zm-7.835 2.086h12.068v.268H2.468zm3.974.377H2.384v.036h3.884v1.17l.174-.004zM6.268 19h-.706l-.038.333h.896l-.152-.347zm-1.012 0h-.218l-.055.333h.235zm1.012-2.914h.174v2.29h-.174zm-3.884 3.247h2.29L4.73 19H2.384zm4.464-5.68h6.116v1.206a1.2 1.2 0 0 1 .591.224v-1.467h-6.91v1.2h.2zm5.087 5.68h.663L12.56 19h-.77zm-4.058 0L7.823 19h-.156l.04.333zM9.943 19h-1.81l.052.333h1.703zm-3.298-2.914h.203v2.293h-.203zm6.32.655l.417 2.592h.176v-3.209l-.594.005zm-6.117 1.943h-.203v.403l.108.246H7.4L7.361 19h-.513zm4.755.65L11.457 19h-.684l-.038.333zm1.361-.682V19h-.098l.04.333h.168zM10.466 19h-.215l-.055.333h.233zm-5.885.898l.074-.449h-2.27v.449zm7.405-.449l.032.073h.602l-.008-.073zm-7.096.449h.264l.051-.449h-.24zm1.581-.449h-.96l-.002.022h.972zm.332 0l.01.022h.602l-.002-.022zm.916 0l.003.022H7.9l-.003-.022zm-.255.449l-.014-.123H5.474l-.013.123zM2.058 2.035v20h20v-20zm19.783 13.262l-1.972-.662l.038-9.314l1.934-.459zm0-10.662l-1.933.458V3.904l1.928-.625zm0-1.585l-2.054.666l-16.182.065l.132.217l15.958-.063l-.043 10.666h-2.036v.218h2.126l2.1.708v6.292H2.275v-1.8h-.007v-6.084h.006v-.282h.11v-.038h-.11v-.109h.194v-.27h-.193v-.11h.246v-1.248h-.247V4.004h.02v-.218h-.02V2.252h19.567ZM9.795 19.897l.074-.449H8.204l.073.45zm-1.827 0l-.02-.123h-.19l.013.123zm2.135 0h.262l.051-.449h-.239zm1.551-.449h-.932l-.008.073h.972zm1.01.45l-.009-.073H10.68l-.008.072zm-7.078-7.78l.002-.694l1.014.003l-.002.694zm1.13.004l.003-.696h.26l-.001.696zm9.146.007H17.5v-.703h-3.39v.703h1.636zm-2.188 1.478h.32v1.261h-.32zm.435-.758l.558.295h-.029v.463h-.529v1.261h1.637v-2.623H14.11zm3.391 2.02v-2.624h-1.638v2.623h1.32zm-1.754.115h-2.072v.2a1 1 0 0 1 .09.105h3.3v-.3h-1.318zM3.108 9.082h-.217l.005 1.22l.083-.017v-.028h.134z"
            ></path></svg
          >
          <div class="w-full text-base font-semibold">Kitchen</div>
          <div class="w-full text-sm">
            Surfaces wiped, dishes washed, floor swept
          </div>
        </div>
      </label>
    </li>
    <li>
      <input
        type="checkbox"
        id="utility-room-option"
        name="utility_room"
        class="hidden peer"
      />
      <label
        for="utility-room-option"
        class="inline-flex h-44 items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-[#494f8c] peer-checked:bg-[#494f8c] hover:text-gray-600 peer-checked:text-white hover:bg-gray-50"
      >
        <div class="block">
          <svg
            class="mb-2 w-16 h-16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            ><path
              fill="currentColor"
              d="M25 6a1 1 0 1 1 0-2a1 1 0 1 1 0 2m-9 20a8 8 0 1 1 0-16a8 8 0 0 1 0 16M6 5a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1m15-1a1 1 0 1 1 0 2a1 1 0 1 1 0-2m1 12.028c-.983.152-1.721.975-1.721 1.972s.738 1.82 1.721 1.971c-.842 2.341-3.132 4.03-5.825 4.03C12.77 24 10 21.307 10 18c0-3.31 2.77-6 6.175-6c2.693 0 4.983 1.686 5.825 4.027M27 2H5a1 1 0 0 0-1 1v26a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1"
            ></path></svg
          >
          <div class="w-full text-base font-semibold">Utility room</div>
          <div class="w-full text-sm">
            Clean utility room, sparkling washer.
          </div>
        </div>
      </label>
    </li>
    <li>
      <input
        type="checkbox"
        id="office-option"
        name="office"
        class="hidden peer"
      />
      <label
        for="office-option"
        class="inline-flex h-44 items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-[#494f8c] peer-checked:bg-[#494f8c] hover:text-gray-600 peer-checked:text-white hover:bg-gray-50"
      >
        <div class="block">
          <svg
            class="mb-2 w-16 h-16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            ><path
              fill="currentColor"
              d="M13.427 18.776v.288h.142v-.315zm-.107.288v-.268l-.153.028v.24zm.695 1.887a.306.356 0 0 1-.306.356a.306.356 0 0 1-.306-.356a.306.356 0 0 1 .306-.356a.306.356 0 0 1 .306.356m-2.605-1.626h.142v.533h-.142zm-.26 0h.153v.533h-.153zm5.621-.303a.4.4 0 0 0-.1-.288l-.055-.026h-.013c-.063 0-.119.068-.148.166l.316.172zm.779 1.664c.1 0 .178-.145.178-.316s-.082-.315-.178-.315s-.177.144-.177.315s.081.316.177.316m-.269-.659h-.089v-.011a.33.33 0 0 0-.141.308c0 .171.082.316.178.316a.14.14 0 0 0 .112-.073a.6.6 0 0 1-.034-.2a.5.5 0 0 1 .057-.248a.23.23 0 0 0-.083-.092m-3.572.498a.36.36 0 0 1 .291.155a.295.295 0 0 0-.581 0a.36.36 0 0 1 .29-.155m-.558-2.491v.134l.697-.195l.206-.046l.002-.005l-.852.028zm.97-1.156l.124.037l.077.042l-.174-.463l-1.465-.4l-.018-.152l1.421.39l-.386-1.022l-1.1.125l-.121-1.016l.368-.063l.224-.076l.023-.12l-1.409-.374l-.362.04l-.15.029v.057l.023.093l.765.275l.122 1.215l-.693.079l-.043.006l.766.21l.015.151l-.932-.255v.207a.14.14 0 0 0 .1.137l.865.26l.034.335l.092.03l.011.374l.334.1zm-.721-.218l-.636.087l-.034-.289zm-7.731-5.293l1.764-.051l-.214-.511l-1.674.057zm1.313-.467l.145.341l-1.192.034l-.084-.337zm-1.139 5.968v-.114l-.108-.129v.243zm3.209.504v-.264l-.23.02v.275zm-2.268.283v-.327l-.219.03v.323zm-.8-.95l.35.476l-.051-2.106v-1.357l-.596-.579l-.002 3.159l.284.387l.015.018zm-.21-3.665l.606.461l2.775-.118l-.786-.438Zm3.429 1.709v-1.113l-2.778.12v1.168zm-.523 2.249l.064-.006l.459-.044v-2.057l-2.776.175l.04 2.147l.379-.037l.08-.011v.003zM6.675 7.5H2.887l.059 3.359l3.729-.575zm-.192 2.679l-3.351.516l-.053-3.021l3.4-.007zM2 2.106v19.788h20V2.106Zm19.752 19.539H2.248V2.355h19.5Zm-5.789-3.043l.107.058h.449l-.065-.031zm2.189.245a.675.675 0 0 0-.627-.47h-.753l.031.27v.153h-.005a.6.6 0 0 1 .044.226v.06l.11.061a.5.5 0 0 0 .026-.162a.37.37 0 0 0-.117-.3h.666a.39.39 0 0 1 .362.272l.936 2.668q-.002.012.006.023h.285a.5.5 0 0 0-.025-.131zm-11.896.104a.44.44 0 0 1 .394-.269h4.737l1.016-.3H6.65a.72.72 0 0 0-.65.439l-1.166 2.66a.5.5 0 0 0-.038.164h.284l.01-.034zM18.152 9.4a3 3 0 0 0-.437-.172a.5.5 0 0 0-.145-.016V7.42L14 7.5v2.791l1.986.319a3.1 3.1 0 0 0-1.229.6a2 2 0 0 0-.126.112H10.65v-1.034h3.232V7.5H6.767v2.791h3.162v1.027H7.586l.058.137l-2.085.06l-.049-.2h-.852l-.729.459v.147h10.237l-.054.107H3.93v.215h.7v5.4l-.322.621h.644l.576-1.288l-.328-.018l-.045-4.723l8.867-.007a6.6 6.6 0 0 0-.165 2.93c0 .016.014.13.045.3l.57 1.512h-.1v.161l-.087.014l-.019.732l-.094.006l-.034.132l-.267.059l-2.555.714l-.032.39h.153l-.026-.138l2.517-.472l.278.105l-.52 1.227v.408l.194.027l.034-.247v-.007l.563-1.35l.385-.071l2.321 1.1l.074.159h.2l-.029-.391L15.5 18.47l.981.054l.215.105l-.04-.328l-1.926-.294l-.021-.12h-.081l-.023-.725l-.088-.03v-.106a2 2 0 0 0 .205.243a1.2 1.2 0 0 0 .339.246v.006L15.4 18l.633.1l-.378-.473v-.032a3.7 3.7 0 0 0 .725-.193a2.5 2.5 0 0 0 1-.467c.311-.321.25-.751.158-1.4a8.5 8.5 0 0 1-.111-1.606a5.8 5.8 0 0 1 .473-2.09q.062-.15.106-.275l.018.019c.058.047.139-.027.3-.034a.45.45 0 0 1 .356.115c-.009.045-.562-.122-.678.069c-.03.049-.031.125 0 .149s.131-.051.264-.092c.218-.066.458.017.46.069c0 .079-.532.052-.678.357c-.048.1-.053.23-.012.253s.118-.075.23-.173a1.05 1.05 0 0 1 .575-.3c.034.049-.66.475-.575.7a.19.19 0 0 0 .173.1a.27.27 0 0 0 .176-.11c-.051.084-.1.187-.061.248c.027.045.076.026.126.08c.078.084.036.2.053.255a.65.65 0 0 1-.474.12a3 3 0 0 0-.437-.171c-.146-.032-.193-.014-.219.01a.166.166 0 0 0 0 .22c.058.047.139-.027.3-.035a.46.46 0 0 1 .357.115c-.01.046-.563-.121-.679.069c-.03.05-.031.126 0 .15s.131-.051.265-.092c.217-.067.457.017.46.069c0 .079-.532.05-.679.356c-.048.1-.053.232-.011.253s.117-.074.23-.172a1.05 1.05 0 0 1 .575-.3c.034.049-.661.475-.575.7a.1.1 0 0 0 .022.037v1.91a4 4 0 0 1 .04.529a.27.27 0 0 0 .219.255a6.6 6.6 0 0 0 1.78.066a.31.31 0 0 0 .273-.3v-2.5a.32.32 0 0 0-.321-.32l-.148.023a1.2 1.2 0 0 0 .454-.713a.37.37 0 0 0 .255.1c.167-.014.273-.221.311-.2s-.105.2-.058.39c.043.176.23.3.288.266c.058-.035-.022-.178.069-.276c.05-.055.1-.036.126-.081c.037-.061-.01-.164-.061-.248a.27.27 0 0 0 .176.11a.19.19 0 0 0 .173-.1c.085-.227-.609-.653-.575-.7a1.05 1.05 0 0 1 .575.3c.112.1.188.194.23.173s.036-.154-.012-.253c-.146-.3-.682-.278-.678-.357c0-.052.242-.135.46-.07c.133.042.22.127.264.093s.03-.1 0-.15c-.116-.19-.669-.023-.678-.068a.45.45 0 0 1 .356-.115c.16.007.241.08.3.034a.164.164 0 0 0 0-.218c-.026-.026-.073-.044-.218-.012a3 3 0 0 0-.437.173a.7.7 0 0 1-.506-.138l-.138-.07c.152-.213.261-.483.17-.623c-.158-.243-.852.009-.886-.115c-.019-.073.2-.238.439-.273a.41.41 0 0 0 .311.158a.3.3 0 0 0 .15-.065a1 1 0 0 0 .111.055a.4.4 0 0 0-.008.206c.043.175.23.3.288.264s-.022-.178.069-.276c.05-.055.1-.035.126-.08c.037-.061-.01-.165-.061-.25a.26.26 0 0 0 .176.112a.19.19 0 0 0 .173-.1c.085-.226-.609-.653-.575-.7a1.07 1.07 0 0 1 .575.3c.112.1.188.194.23.172s.036-.154-.012-.253c-.146-.3-.682-.278-.678-.357c0-.052.242-.135.46-.07c.133.042.22.128.264.093s.03-.1 0-.15c-.116-.19-.669-.023-.678-.068a.45.45 0 0 1 .352-.111c.16.007.241.08.3.034a.164.164 0 0 0 0-.218c-.026-.026-.073-.043-.218-.012a3 3 0 0 0-.437.173a.7.7 0 0 1-.506-.138a6 6 0 0 0-.472-.22a.3.3 0 0 0-.022-.228c-.158-.243-.852.009-.885-.115c-.022-.077.226-.26.482-.278a1 1 0 0 1 .116 0c.272.026.4.19.46.149c.045-.031.05-.175-.023-.253c-.217-.226-1.1.148-1.518.368a.7.7 0 0 1-.508.138m-11.178.667v-2.4h6.685v2.4ZM8 11.693l.265-.253h3.191l.242.253zm4.693 0c-.052.114-.366.131-.449 0a.2.2 0 0 1-.011-.182a.2.2 0 0 1 .044-.063a.04.04 0 0 1 .017-.008l.047-.006l.093.1l.04-.021l-.077-.083l.062-.01h.007a.26.26 0 0 1 .158.078c.043.04.094.132.066.195zm6 .879l.007-.011zm2.317.819L21 13.38zm0-2.372l-.01-.011zm-3.44-1.55a1 1 0 0 1 .226-.048a.45.45 0 0 1 .356.115c-.008.038-.385-.069-.582 0zm0 .27a1 1 0 0 1 .168-.076c.218-.067.458.017.46.069c0 .071-.437.056-.628.28zm-3.382.426V7.672l3.191-.072v2.972a2 2 0 0 0-.233-.045a3 3 0 0 0-.356-.022a3 3 0 0 0-.349.019zm-.072 4.845l-.018-.216h.074l.075-.01a.7.7 0 0 1 .238-.005l.054.01l.013.172c0 .013.01.11.032.257l-.439.024a4 4 0 0 1-.029-.232m.405 1.484l-.063-.134l.426-.083q.031.065.065.128zm1.153-.24l-.552.115a2 2 0 0 1-.074-.125l.08-.015l.552-.108l1.283-.252a1 1 0 0 1-.034.124zm.874.184q-.126.074-.314.156a1.3 1.3 0 0 1-.528.159h-.039a.6.6 0 0 1-.208-.054l.209-.05zm-1.823-1.231l-.006-.035l.1.01h.255zm1.921.385a.9.9 0 0 0 .033-.327a.7.7 0 0 1-.1.309l-.4-.109a.6.6 0 0 0 .269-.2a.6.6 0 0 0 .093-.317l.045-.014l.061-.021l.051-.02q.074-.028.136-.055l.089-.038l.01.1l.014.139a4.4 4.4 0 0 1 .037.643zm.247-1.647l-.048.015l-.159.048l-.095.027l-.024.007l-.069.017a4 4 0 0 1 .143-.693c.062-.22.1-.365.031-.508a.44.44 0 0 0-.331-.223a1 1 0 0 0-.113-.01a.94.94 0 0 0-.505.163a1 1 0 0 0-.213.186a1.83 1.83 0 0 0-.354 1.118v.175h-.133v-.072a3.2 3.2 0 0 1 .159-1.312a1.4 1.4 0 0 1 .227-.378a1.1 1.1 0 0 1 .962-.386a.6.6 0 0 1 .27.108a.5.5 0 0 1 .164.19a.5.5 0 0 1 .054.23c.059-.2.076-.3.018-.4a.44.44 0 0 0-.236-.183a1 1 0 0 0-.14-.038h-.021a1 1 0 0 0-.139-.01a1 1 0 0 0-.152.01a1.29 1.29 0 0 0-1 .707a3 3 0 0 0-.214 1.468v.073h-.321v-.068a3.9 3.9 0 0 1 .326-1.983a2 2 0 0 1 .128-.2q.041-.055.085-.107l.013-.014a1.66 1.66 0 0 1 .64-.443a1.4 1.4 0 0 1 .715-.09a.79.79 0 0 1 .6.4a1.08 1.08 0 0 1-.032.838A5 5 0 0 0 16.9 13.9zm.317 2.73a1.9 1.9 0 0 1-.85.471a2.4 2.4 0 0 1-.7.189h-.06a.94.94 0 0 1-.414-.092a1 1 0 0 1-.283-.2a1 1 0 0 1-.075-.079l-.077-.094l.365-.087l.087-.02a.7.7 0 0 0 .168.127a.57.57 0 0 0 .294.06a1.8 1.8 0 0 0 .559-.165a1.6 1.6 0 0 0 .664-.374l.042-.059l.43-.1V15.9l-.32.067v-.116l.33-.065l-.336-.091q-.015-.194-.044-.435c-.026-.221-.059-.5-.072-.807v-.027a.23.23 0 0 1 .058-.1a.24.24 0 0 1 .274-.074l.057.017v.051a9 9 0 0 0 .082.931c.084.614.139 1.049-.179 1.424m.444-4.381a5.3 5.3 0 0 0-.324 1.434v.04l-.036.018a3 3 0 0 1-.273.115l-.1.037v-.107a5.7 5.7 0 0 1 .318-1.588c.116-.353.18-.547.071-.733a.77.77 0 0 0-.563-.325a1.5 1.5 0 0 0-.236-.018a1.96 1.96 0 0 0-.879.215a2 2 0 0 0-.479.345a2 2 0 0 0-.169.194a2 2 0 0 0-.074.107a2 2 0 0 0-.114.2A4.1 4.1 0 0 0 14.5 14.2v.077h-.077a5 5 0 0 1-.306-.023l-.061-.006v-.061a4.55 4.55 0 0 1 .265-1.954q.042-.102.1-.2q.029-.054.06-.107a2.2 2.2 0 0 1 .393-.486q.067-.063.141-.12a2.55 2.55 0 0 1 1.824-.521a1.16 1.16 0 0 1 .866.479c.195.313.086.622-.051 1.016m1.446 2.511h-.15V14.7a.4.4 0 0 0 .15-.074zm.186-.485v-.038a.32.32 0 0 0-.184-.211a2 2 0 0 1-.15-.091a.14.14 0 0 1-.068-.112a.2.2 0 0 1 .068-.122a.4.4 0 0 1 .15-.09a.3.3 0 0 1 .207-.007c.216.092.12.546.239.642q-.127.016-.266.029zm-.3-1.679c.02-.013.06.04.119.094a.4.4 0 0 0 .143.092a2 2 0 0 0 .11.166q-.131.05-.253.1l-.115.053a.4.4 0 0 0 .054-.118c.038-.186-.103-.362-.067-.387zM20 13.23a.3.3 0 0 0 0 .068c-.255-.079-.73.074-.758-.028c-.012-.044.064-.123.18-.186c.107.117.219.191.289.169s.086-.134.1-.261h.029a.8.8 0 0 1 .265.077a.25.25 0 0 0-.105.161m-.02-.63c.158-.068.42.086.425.218c0 .052-.036.091-.089.127a.2.2 0 0 0-.035-.053c-.079-.082-.246-.085-.446-.045a.3.3 0 0 1 .145-.247m-.08-.344c-.092 0-.219-.023-.343-.029c-.118-.077-.261-.128-.258-.228l.006-.029a1 1 0 0 1 .134-.026a1 1 0 0 1 .116 0a.8.8 0 0 1 .317.1c.012.069.018.144.028.21zm-.175-.475a.22.22 0 0 1 .112.126a3 3 0 0 0-.356-.1a.3.3 0 0 1 .244-.028zM20 9.764q.046.05.039.082c-.006.021-.044.036-.1.037A1 1 0 0 0 20 9.764m-1.052-.087v-.095h.15v.107q.036-.02.084-.044l.019.006a.27.27 0 0 1 .137.21a.26.26 0 0 0-.184.1a.3.3 0 0 0-.023.22l-.033-.034a1 1 0 0 0-.15-.1c-.092-.053-.175-.1-.172-.177s.076-.147.17-.193zm0 .981a.5.5 0 0 0 .15-.134a.37.37 0 0 0 .081-.194c.122.287.4.594.538.552c.159-.05.035-.558.265-.656c.158-.067.42.086.425.218c.007.161-.37.195-.4.415a.3.3 0 0 0 .036.17a5.3 5.3 0 0 0-.855.359l-.088.047a1 1 0 0 1-.15.069a.44.44 0 0 1-.268.022a3 3 0 0 0-.437-.173a.4.4 0 0 0-.17-.013a.48.48 0 0 0-.068-.4a.9.9 0 0 0-.433-.306v-.313c.042-.031.1-.092.168-.153a1.05 1.05 0 0 1 .575-.3c.034.049-.66.475-.575.7a.19.19 0 0 0 .173.1a.27.27 0 0 0 .176-.11c-.051.084-.1.187-.061.248c.027.045.076.026.126.081c.092.1.016.246.069.276s.245-.09.288-.265c.047-.191-.094-.367-.057-.391s.143.182.31.2a.3.3 0 0 0 .18-.049zm-.771-.225l-.007.012zm.643-4.278h-.35l-.34-.625c.212-.343.282-.76.131-.886c-.191-.161-.757.126-1.048.541c-.205.291-.362.771-.193.92s.656-.057.934-.347l.054-.06l.427.457h-1.959l-.325-.582l-.044-.557a1.162 1.162 0 1 0-.776-.008l-.077.511l-.468.636H13.32V4.883h-.864v1.272h-.975v.621h7.339zm-2.784-2.024h-.575l-.083.558a.851.851 0 1 1 .7 0zM9 4.529H6.76l.214-.329v-.836l-.3-.46h-.7l-.383.5v.82l.294.306h-.744V2.506h-.506v2.023h-.169V2.651h-.222v1.878h-.222V2.973h-.284v1.556H3.6V2.805h-.268v1.724h-.138V2.613h-.207v1.916H2.8V3.2h-.387v1.329h-.165v1.044H9Zm-.355.69H2.413v-.336h6.232z"
            ></path></svg
          >
          <div class="w-full text-base font-semibold">
            Study room/Office
          </div>
          <div class="w-full text-sm">
            Dusting, vacuuming, sanitizing.
          </div>
        </div>
      </label>
    </li>
  </ul>
</div>
<div class="w-full px-2 md:px-16 mb-6 md:mb-5">
  <label
    class="block tracking-wide text-gray-700 text-base font-bold mb-2"
    for="additional-areas"
  >
    Additional areas
  </label>
  <input
    class="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-800"
    id="additional-areas"
    name="additional_areas"
    type="text"
    placeholder="Gym, Ironing, etc"
  />
</div>
<div class="flex-row w-full px-2 md:px-16 mb-6 md:mb-5">
  <label
    class="block tracking-wide text-gray-700 text-base font-bold mb-2"
  >
    How often would you like the service? <span class="text-red-500"
      >*</span
    >
  </label>
  <div class="grid md:grid-cols-3 gap-5">
    <div class="flex items-center ps-4 border border-gray-200 rounded">
      <input
        id="bordered-radio-1"
        type="radio"
        value="More than weekly"
        name="service_frequency"
        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
        required
      />
      <label
        for="bordered-radio-1"
        class="w-full py-4 ms-2 text-sm font-medium text-gray-900"
        >More than weekly</label
      >
    </div>
    <div class="flex items-center ps-4 border border-gray-200 rounded">
      <input
        id="bordered-radio-2"
        type="radio"
        value="Once per week"
        name="service_frequency"
        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
      />
      <label
        for="bordered-radio-2"
        class="w-full py-4 ms-2 text-sm font-medium text-gray-900"
        >Once per week</label
      >
    </div>
    <div class="flex items-center ps-4 border border-gray-200 rounded">
      <input
        id="bordered-radio-3"
        type="radio"
        value="Every two week"
        name="service_frequency"
        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
      />
      <label
        for="bordered-radio-3"
        class="w-full py-4 ms-2 text-sm font-medium text-gray-900"
        >Every two week</label
      >
    </div>
  </div>
</div>
<div class="flex-row w-full px-2 md:px-16 mb-6 md:mb-5">
  <label
    class="block tracking-wide text-gray-700 text-base font-bold mb-2"
  >
    Do you have pets? <span class="text-red-500">*</span>
  </label>
  <div class="grid grid-cols-3 gap-5">
    <div class="flex items-center ps-4 border border-gray-200 rounded">
      <input
        id="pets-radio-1"
        type="radio"
        value="Yes"
        name="pets"
        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
        required
      />
      <label
        for="pets-radio-1"
        class="w-full py-4 ms-2 text-sm font-medium text-gray-900"
        >Yes</label
      >
    </div>
    <div class="flex items-center ps-4 border border-gray-200 rounded">
      <input
        id="pets-radio-2"
        type="radio"
        value="No"
        name="pets"
        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
      />
      <label
        for="pets-radio-2"
        class="w-full py-4 ms-2 text-sm font-medium text-gray-900"
        >No</label
      >
    </div>
  </div>
</div>
<div class="w-full px-2 md:px-16 mb-6 md:mb-8">
  <label
    class="block tracking-wide text-gray-700 text-base font-bold mb-2"
    for="any-requirements"
  >
    Any special requirements?
  </label>
  <input
    class="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-800"
    id="any-requirements"
    name="additional_requirements"
    type="text"
  />
</div>`,
  'One off Cleaning': `   <div
  class="flex justify-between items-center w-full px-5 md:px-20 my-2 pb-5 border-b-4 border-dotted"
>
  <label for="bedrooms" class="font-semibold text-lg text-muted"
    >Bedrooms <span class="text-red-500">*</span></label
  >
  <div
    class="h-10 w-28 bg-gray-50 flex border border-gray-200 rounded items-center mt-1"
  >
    <button
      type="button"
      id="decrement-button-bedrooms"
      data-input-counter="quantity-bedrooms"
      data-operation="decrement"
      class="cursor-pointer outline-none focus:outline-none border-r border-gray-200 transition-all text-gray-500 hover:text-blue-600"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4 mx-2"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clip-rule="evenodd"></path>
      </svg>
    </button>
    <input
      name="bedrooms"
      maxlength="1"
      min="1"
      value="1"
      oninput="this.value = this.value.replace(/[^1-9]/g, '');"
      type="text"
      id="quantity-bedrooms"
      class="px-2 text-center appearance-none outline-none text-gray-800 w-full bg-transparent"
      required
    />
    <button
      type="button"
      id="increment-button-bedrooms"
      data-input-counter="quantity-bedrooms"
      data-operation="increment"
      class="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-500 hover:text-blue-600"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4 mx-2 fill-current"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
          clip-rule="evenodd"></path>
      </svg>
    </button>
  </div>
</div>

<div
  class="flex justify-between items-center w-full px-5 md:px-20 my-2 pb-5 border-b-4 border-dotted"
>
  <label for="bathrooms" class="font-semibold text-lg text-muted"
    >Bathrooms <span class="text-red-500">*</span></label
  >
  <div
    class="h-10 w-28 bg-gray-50 flex border border-gray-200 rounded items-center mt-1"
  >
    <button
      type="button"
      id="decrement-button-bathrooms"
      data-input-counter="quantity-bathrooms"
      data-operation="decrement"
      class="cursor-pointer outline-none focus:outline-none border-r border-gray-200 transition-all text-gray-500 hover:text-blue-600"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4 mx-2"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clip-rule="evenodd"></path>
      </svg>
    </button>
    <input
      name="bathrooms"
      maxlength="1"
      min="1"
      value="1"
      oninput="this.value = this.value.replace(/[^1-9]/g, '');"
      type="text"
      id="quantity-bathrooms"
      class="px-2 text-center appearance-none outline-none text-gray-800 w-full bg-transparent"
      required
    />
    <button
      type="button"
      id="increment-button-bathrooms"
      data-input-counter="quantity-bathrooms"
      data-operation="increment"
      class="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-500 hover:text-blue-600"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4 mx-2 fill-current"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
          clip-rule="evenodd"></path>
      </svg>
    </button>
  </div>
</div>

<div
  class="flex-row justify-between items-center w-full px-2 md:px-20 my-2 pb-5"
>
  <h3 class="mb-5 text-xl font-medium text-gray-900">
    Additional tasks:
  </h3>

  <ul class="grid w-full gap-2 md:gap-6 md:grid-cols-3">
    <li class="h-full">
      <input
        type="checkbox"
        id="kitchen-option"
        name="kitchen"
        class="hidden peer"
      />
      <label
        for="kitchen-option"
        class="inline-flex h-44 items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-[#494f8c] peer-checked:bg-[#494f8c] hover:text-gray-600 peer-checked:text-white hover:bg-gray-50"
      >
        <div class="block">
          <svg
            class="mb-2 w-16 h-16"
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            ><path
              fill="currentColor"
              d="m7.424 16.122l.176-.029l.899 5.573l-.176.029zm-2.401 5.506l.625-5.53l.177.02l-.625 5.53zM7.99 19.71l-.028-.178H5.45l-.02.178zm-.894-3.56l.388 3.371h.18l-.392-3.393zm.632 3.941l-.042-.37h-.179l.045.39zm-3.114-.005l.658-3.994l.175.03l-.658 3.993zm2.735-1.642l-1.777-.011l-.02.177l1.818.012zm-2.3.163l.303.002l.02-.178l-.295-.002zm1.13.018l.393.896h.194l-.392-.895zm-.954-3.269c-.054.079-.245.417-.176.6h1.8l1.608-.016a.46.46 0 0 0 .091-.416a.65.65 0 0 0-.275-.389a1.07 1.07 0 0 0-.63-.2h-.017l-1.564.021a1.05 1.05 0 0 0-.487.124a.94.94 0 0 0-.35.276m-.3.354a1.5 1.5 0 0 1 .193-.429a1 1 0 0 1 .36-.3a4 4 0 0 0-.566.05c-.09.022-.2.061-.226.116s0 .1.035.2a4 4 0 0 0 .203.363m7.703.462l.175-.028l.9 5.573l-.176.028zm-2.398 5.495l.623-5.531l.177.02l-.623 5.531zm2.965-1.907l-.028-.177h-2.514l-.02.177zm-.262.382l-.042-.371h-.179l.045.391zm-.065-.57l-.39-3.393l-.177.02l.388 3.373zm-3.05.565l.659-3.994l.175.029l-.658 3.994zm.435-1.48l.304.002l.02-.177l-.295-.002zm2.301-.162l-1.777-.012l-.02.178l1.817.012zm-1.17.181l.393.896h.194l-.392-.895zm2.092-3.49a1.06 1.06 0 0 0-.63-.2h-.015l-1.564.021a1.06 1.06 0 0 0-.487.123a.94.94 0 0 0-.35.28c-.055.079-.245.417-.176.6h1.8l1.608-.014a.45.45 0 0 0 .091-.415a.65.65 0 0 0-.277-.395m-3.153.148a1 1 0 0 1 .358-.3a5 5 0 0 0-.565.049c-.089.023-.2.062-.225.117s0 .1.035.2a4 4 0 0 0 .2.366a1.5 1.5 0 0 1 .197-.432m6.744-7.503h2.486v.337h-2.486zm0-1.783h2.486v.343h-2.486zM5.258 5.035l-.983-.13v3.9h.983zM5.12 8.558h-.683V5.205l.683.07zm10.452.244h1.287V4.95h-1.287zm.21-3.6h.845v3.356h-.846zm-1.523 3.6h1.252V4.95h-1.252zm.272-3.6h.777v3.356h-.777zm-7.05 3.6h2V5.035h-2zm.284-3.5H9.2v3.256H7.764zm-2.277 3.5h1.935V5.035H5.487zm.26-3.5h1.4v3.256h-1.4zM2.352 2.476h.318v6.548h-.318zm.376 6.548h.37l.03-5.917l-.387-.566zm.426 0h.832v-4.5l-.8-1.323Zm2.186-4.26L4.09 4.58v4.444h1.252zm-.024 4.1h-1.1v-4.03l1.1.145zm4.241-4.097H5.4v4.257h4.16zM9.542 8.86H5.43V4.98h4.113zm4.15.155l.33-.034V4.706l-.33.212zm3.281-4.333H14.11v4.3h2.863zm-.06 4.178h-2.71V4.891h2.71zM5.057 11.077l.356-.042a.13.13 0 0 0 .092-.06l.174-.3q-.235.042-.472.064l-.376.036a3 3 0 0 1-.287.012H4.31l.188.23a.13.13 0 0 0 .09.045zM4.7 10.67c0-.074-.04-.126-.076-.126s-.075.052-.075.126v.027h.148zm-.442-.115a.136.136 0 0 0 .2.12a.24.24 0 0 1 .06-.167a.135.135 0 0 0-.262.051zm.776.024a.15.15 0 0 0 .024.084l.141-.013l.145-.016a.2.2 0 0 0 .01-.055a.161.161 0 0 0-.32 0m.581.015a.14.14 0 0 0-.138-.124a.2.2 0 0 0-.055.012a.24.24 0 0 1 .02.1v.043zm-.684-.05a.09.09 0 0 0-.088.088a.1.1 0 0 0 .016.05l.107-.01a.2.2 0 0 1-.019-.093v-.033zm2.463.084v.16l.054.174a.084.084 0 0 0 .08.06l.3-.001a.08.08 0 0 0 .078-.052l.077-.192a.1.1 0 0 0 .006-.032v-.117a.084.084 0 0 0-.083-.084h-.428a.084.084 0 0 0-.084.084m8.724-.049v.308l.013.031a.034.034 0 0 0 .032.023h.338a.04.04 0 0 0 .033-.023v-.339a.035.035 0 0 0-.035-.035h-.34a.035.035 0 0 0-.04.035m.045-.122h.08v-.335h-.08zm.238 0h.092v-.385h-.092v.135zm-.1-.192h.042v.192h-.042zm-9.084-.116l.057.148l.131.177a.2.2 0 0 1 .068-.017l.038-.276l.134-.185l-.045-.061l-.01-.04l-.118-.047l-.148.093l.183.041l-.1.3zm.85-.202l-.024.372l-.072.15a.1.1 0 0 1 .042.021l.08-.164l.283-.24l-.1-.185zm-.41.444l-.02-.048l-.09.114h.067zm-.355-.31l-.04-.093l-.042-.01l-.072.08zm.476-.17l-.06.083l.095.124l-.035.045H7.8l.2-.316l-.256-.135l-.128.06l.022.082zm4.085.545h.115v.25h-.115zm.143-1.003a.7.7 0 0 0-.036-.255a.35.35 0 0 0-.075-.149a.17.17 0 0 0-.093-.06a.16.16 0 0 0-.105.019c-.043.025-.067.072-.084.168a1.5 1.5 0 0 0-.006.325h.058a1.4 1.4 0 0 1 .005-.309c.017-.094.037-.118.056-.129a.1.1 0 0 1 .065-.013a.12.12 0 0 1 .061.043a.3.3 0 0 1 .062.124a.7.7 0 0 1 .034.238a1 1 0 0 1-.072.3a.57.57 0 0 0-.054.291a2 2 0 0 1 .048.362h.058a2 2 0 0 0-.05-.375a.55.55 0 0 1 .052-.26a1 1 0 0 0 .076-.32m-.34.66l.073.076v-.077l-.074-.072v-.487h-.06v.054l-.019.973h-.033v.342h.16l.004-.337h-.052zM9.905 7.18h3.28v.132h-3.28Zm0-.273h3.28v.132h-3.28Zm0-.536h3.28v.357h-3.28zm1.635 3.51H9.833V6.245h3.45V9.88h-1.368l-.018.087h1.473V6.158H9.746v3.81h1.794zm-8.772.533l.1.554l.157-.059v-.544zm5.302.396l-.028.068h3.452v-.355h.035v-.179H8.158l-.022.02l-.078.172a.2.2 0 0 1 .027.093v.117a.2.2 0 0 1-.014.064m8.567.068v-.534h-.087v.124a.12.12 0 0 1 .074.112v.3zm-13.525 0h1.164l-.153-.187h.1a.22.22 0 0 1-.047-.136a.225.225 0 0 1 .152-.212H3.113zm2.26-.468a.2.2 0 0 1 .1-.026a.23.23 0 0 1 .224.195h.008l.141-.028l-.189.328h1.677l-.019-.063a.2.2 0 0 1-.008-.05v-.136a.17.17 0 0 1 .05-.12l-.12-.165H5.27a.24.24 0 0 1 .103.065m-.777.051h.028a.16.16 0 0 1 .144.112a.18.18 0 0 1 .163-.112a.2.2 0 0 1 .045.006a.25.25 0 0 1 .143-.12h-.653a.22.22 0 0 1 .13.114m11.51.007v-.124h-4.16v.055h.086v.366h-.23v-.366h.042v-.055h-.12v.184h.052v.35h4.26v-.3a.12.12 0 0 1 .07-.11M5.432 11.57v-.179l-2.762-.032l-.058-.248l.18-.078l-.104-.573l-.064-.238h-.35v1.597l2.81.028h.007v.189zm.125-.33H17.83v.13H5.558zm8.016 1.345l-.02-.02l-.128-.075l.567.3v-.544h-.979l-.2-.116h1.174v-.7H10.24v.7h-.116v-.7h-.275v.7h-.116v-.7H7.094v.7H4.767l-.009.006h-.006l.177-.228l-2.655-.026h.246v1.251h12.088zm-4.062-.738h-2.19a.073.073 0 0 1 0-.145h2.19a.073.073 0 1 1 0 .145m6.991-.818h-.338a.12.12 0 0 1-.087-.037L8 10.983l-.008.02a.17.17 0 0 1-.158.106h-.3a.17.17 0 0 1-.163-.12v-.007H5.606l-.02.035a.21.21 0 0 1-.156.1l-.36.047l-.48-.024a.21.21 0 0 1-.154-.077l-.078-.084h-1.25l-.419.205l.028.119l2.655.03l.12-.155h12.3l-.79-.181h-.415a.12.12 0 0 1-.084.032m-6.2.124l-.122-.117h3.12l.326.116zm-7.835 2.086h12.068v.268H2.468zm3.974.377H2.384v.036h3.884v1.17l.174-.004zM6.268 19h-.706l-.038.333h.896l-.152-.347zm-1.012 0h-.218l-.055.333h.235zm1.012-2.914h.174v2.29h-.174zm-3.884 3.247h2.29L4.73 19H2.384zm4.464-5.68h6.116v1.206a1.2 1.2 0 0 1 .591.224v-1.467h-6.91v1.2h.2zm5.087 5.68h.663L12.56 19h-.77zm-4.058 0L7.823 19h-.156l.04.333zM9.943 19h-1.81l.052.333h1.703zm-3.298-2.914h.203v2.293h-.203zm6.32.655l.417 2.592h.176v-3.209l-.594.005zm-6.117 1.943h-.203v.403l.108.246H7.4L7.361 19h-.513zm4.755.65L11.457 19h-.684l-.038.333zm1.361-.682V19h-.098l.04.333h.168zM10.466 19h-.215l-.055.333h.233zm-5.885.898l.074-.449h-2.27v.449zm7.405-.449l.032.073h.602l-.008-.073zm-7.096.449h.264l.051-.449h-.24zm1.581-.449h-.96l-.002.022h.972zm.332 0l.01.022h.602l-.002-.022zm.916 0l.003.022H7.9l-.003-.022zm-.255.449l-.014-.123H5.474l-.013.123zM2.058 2.035v20h20v-20zm19.783 13.262l-1.972-.662l.038-9.314l1.934-.459zm0-10.662l-1.933.458V3.904l1.928-.625zm0-1.585l-2.054.666l-16.182.065l.132.217l15.958-.063l-.043 10.666h-2.036v.218h2.126l2.1.708v6.292H2.275v-1.8h-.007v-6.084h.006v-.282h.11v-.038h-.11v-.109h.194v-.27h-.193v-.11h.246v-1.248h-.247V4.004h.02v-.218h-.02V2.252h19.567ZM9.795 19.897l.074-.449H8.204l.073.45zm-1.827 0l-.02-.123h-.19l.013.123zm2.135 0h.262l.051-.449h-.239zm1.551-.449h-.932l-.008.073h.972zm1.01.45l-.009-.073H10.68l-.008.072zm-7.078-7.78l.002-.694l1.014.003l-.002.694zm1.13.004l.003-.696h.26l-.001.696zm9.146.007H17.5v-.703h-3.39v.703h1.636zm-2.188 1.478h.32v1.261h-.32zm.435-.758l.558.295h-.029v.463h-.529v1.261h1.637v-2.623H14.11zm3.391 2.02v-2.624h-1.638v2.623h1.32zm-1.754.115h-2.072v.2a1 1 0 0 1 .09.105h3.3v-.3h-1.318zM3.108 9.082h-.217l.005 1.22l.083-.017v-.028h.134z"
            ></path></svg
          >
          <div class="w-full text-base font-semibold">Kitchen</div>
          <div class="w-full text-sm">
            Surfaces wiped, dishes washed, floor swept
          </div>
        </div>
      </label>
    </li>
    <li>
      <input
        type="checkbox"
        id="utility-room-option"
        name="utility_room"
        class="hidden peer"
      />
      <label
        for="utility-room-option"
        class="inline-flex h-44 items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-[#494f8c] peer-checked:bg-[#494f8c] hover:text-gray-600 peer-checked:text-white hover:bg-gray-50"
      >
        <div class="block">
          <svg
            class="mb-2 w-16 h-16"
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 32 32"
            ><path
              fill="currentColor"
              d="M25 6a1 1 0 1 1 0-2a1 1 0 1 1 0 2m-9 20a8 8 0 1 1 0-16a8 8 0 0 1 0 16M6 5a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1m15-1a1 1 0 1 1 0 2a1 1 0 1 1 0-2m1 12.028c-.983.152-1.721.975-1.721 1.972s.738 1.82 1.721 1.971c-.842 2.341-3.132 4.03-5.825 4.03C12.77 24 10 21.307 10 18c0-3.31 2.77-6 6.175-6c2.693 0 4.983 1.686 5.825 4.027M27 2H5a1 1 0 0 0-1 1v26a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1"
            ></path></svg
          >
          <div class="w-full text-base font-semibold">Utility room</div>
          <div class="w-full text-sm">
            Clean utility room, sparkling washer.
          </div>
        </div>
      </label>
    </li>
    <li>
      <input
        type="checkbox"
        id="office-option"
        name="office"
        class="hidden peer"
      />
      <label
        for="office-option"
        class="inline-flex h-44 items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-[#494f8c] peer-checked:bg-[#494f8c] hover:text-gray-600 peer-checked:text-white hover:bg-gray-50"
      >
        <div class="block">
          <svg
            class="mb-2 w-16 h-16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            ><path
              fill="currentColor"
              d="M13.427 18.776v.288h.142v-.315zm-.107.288v-.268l-.153.028v.24zm.695 1.887a.306.356 0 0 1-.306.356a.306.356 0 0 1-.306-.356a.306.356 0 0 1 .306-.356a.306.356 0 0 1 .306.356m-2.605-1.626h.142v.533h-.142zm-.26 0h.153v.533h-.153zm5.621-.303a.4.4 0 0 0-.1-.288l-.055-.026h-.013c-.063 0-.119.068-.148.166l.316.172zm.779 1.664c.1 0 .178-.145.178-.316s-.082-.315-.178-.315s-.177.144-.177.315s.081.316.177.316m-.269-.659h-.089v-.011a.33.33 0 0 0-.141.308c0 .171.082.316.178.316a.14.14 0 0 0 .112-.073a.6.6 0 0 1-.034-.2a.5.5 0 0 1 .057-.248a.23.23 0 0 0-.083-.092m-3.572.498a.36.36 0 0 1 .291.155a.295.295 0 0 0-.581 0a.36.36 0 0 1 .29-.155m-.558-2.491v.134l.697-.195l.206-.046l.002-.005l-.852.028zm.97-1.156l.124.037l.077.042l-.174-.463l-1.465-.4l-.018-.152l1.421.39l-.386-1.022l-1.1.125l-.121-1.016l.368-.063l.224-.076l.023-.12l-1.409-.374l-.362.04l-.15.029v.057l.023.093l.765.275l.122 1.215l-.693.079l-.043.006l.766.21l.015.151l-.932-.255v.207a.14.14 0 0 0 .1.137l.865.26l.034.335l.092.03l.011.374l.334.1zm-.721-.218l-.636.087l-.034-.289zm-7.731-5.293l1.764-.051l-.214-.511l-1.674.057zm1.313-.467l.145.341l-1.192.034l-.084-.337zm-1.139 5.968v-.114l-.108-.129v.243zm3.209.504v-.264l-.23.02v.275zm-2.268.283v-.327l-.219.03v.323zm-.8-.95l.35.476l-.051-2.106v-1.357l-.596-.579l-.002 3.159l.284.387l.015.018zm-.21-3.665l.606.461l2.775-.118l-.786-.438Zm3.429 1.709v-1.113l-2.778.12v1.168zm-.523 2.249l.064-.006l.459-.044v-2.057l-2.776.175l.04 2.147l.379-.037l.08-.011v.003zM6.675 7.5H2.887l.059 3.359l3.729-.575zm-.192 2.679l-3.351.516l-.053-3.021l3.4-.007zM2 2.106v19.788h20V2.106Zm19.752 19.539H2.248V2.355h19.5Zm-5.789-3.043l.107.058h.449l-.065-.031zm2.189.245a.675.675 0 0 0-.627-.47h-.753l.031.27v.153h-.005a.6.6 0 0 1 .044.226v.06l.11.061a.5.5 0 0 0 .026-.162a.37.37 0 0 0-.117-.3h.666a.39.39 0 0 1 .362.272l.936 2.668q-.002.012.006.023h.285a.5.5 0 0 0-.025-.131zm-11.896.104a.44.44 0 0 1 .394-.269h4.737l1.016-.3H6.65a.72.72 0 0 0-.65.439l-1.166 2.66a.5.5 0 0 0-.038.164h.284l.01-.034zM18.152 9.4a3 3 0 0 0-.437-.172a.5.5 0 0 0-.145-.016V7.42L14 7.5v2.791l1.986.319a3.1 3.1 0 0 0-1.229.6a2 2 0 0 0-.126.112H10.65v-1.034h3.232V7.5H6.767v2.791h3.162v1.027H7.586l.058.137l-2.085.06l-.049-.2h-.852l-.729.459v.147h10.237l-.054.107H3.93v.215h.7v5.4l-.322.621h.644l.576-1.288l-.328-.018l-.045-4.723l8.867-.007a6.6 6.6 0 0 0-.165 2.93c0 .016.014.13.045.3l.57 1.512h-.1v.161l-.087.014l-.019.732l-.094.006l-.034.132l-.267.059l-2.555.714l-.032.39h.153l-.026-.138l2.517-.472l.278.105l-.52 1.227v.408l.194.027l.034-.247v-.007l.563-1.35l.385-.071l2.321 1.1l.074.159h.2l-.029-.391L15.5 18.47l.981.054l.215.105l-.04-.328l-1.926-.294l-.021-.12h-.081l-.023-.725l-.088-.03v-.106a2 2 0 0 0 .205.243a1.2 1.2 0 0 0 .339.246v.006L15.4 18l.633.1l-.378-.473v-.032a3.7 3.7 0 0 0 .725-.193a2.5 2.5 0 0 0 1-.467c.311-.321.25-.751.158-1.4a8.5 8.5 0 0 1-.111-1.606a5.8 5.8 0 0 1 .473-2.09q.062-.15.106-.275l.018.019c.058.047.139-.027.3-.034a.45.45 0 0 1 .356.115c-.009.045-.562-.122-.678.069c-.03.049-.031.125 0 .149s.131-.051.264-.092c.218-.066.458.017.46.069c0 .079-.532.052-.678.357c-.048.1-.053.23-.012.253s.118-.075.23-.173a1.05 1.05 0 0 1 .575-.3c.034.049-.66.475-.575.7a.19.19 0 0 0 .173.1a.27.27 0 0 0 .176-.11c-.051.084-.1.187-.061.248c.027.045.076.026.126.08c.078.084.036.2.053.255a.65.65 0 0 1-.474.12a3 3 0 0 0-.437-.171c-.146-.032-.193-.014-.219.01a.166.166 0 0 0 0 .22c.058.047.139-.027.3-.035a.46.46 0 0 1 .357.115c-.01.046-.563-.121-.679.069c-.03.05-.031.126 0 .15s.131-.051.265-.092c.217-.067.457.017.46.069c0 .079-.532.05-.679.356c-.048.1-.053.232-.011.253s.117-.074.23-.172a1.05 1.05 0 0 1 .575-.3c.034.049-.661.475-.575.7a.1.1 0 0 0 .022.037v1.91a4 4 0 0 1 .04.529a.27.27 0 0 0 .219.255a6.6 6.6 0 0 0 1.78.066a.31.31 0 0 0 .273-.3v-2.5a.32.32 0 0 0-.321-.32l-.148.023a1.2 1.2 0 0 0 .454-.713a.37.37 0 0 0 .255.1c.167-.014.273-.221.311-.2s-.105.2-.058.39c.043.176.23.3.288.266c.058-.035-.022-.178.069-.276c.05-.055.1-.036.126-.081c.037-.061-.01-.164-.061-.248a.27.27 0 0 0 .176.11a.19.19 0 0 0 .173-.1c.085-.227-.609-.653-.575-.7a1.05 1.05 0 0 1 .575.3c.112.1.188.194.23.173s.036-.154-.012-.253c-.146-.3-.682-.278-.678-.357c0-.052.242-.135.46-.07c.133.042.22.127.264.093s.03-.1 0-.15c-.116-.19-.669-.023-.678-.068a.45.45 0 0 1 .356-.115c.16.007.241.08.3.034a.164.164 0 0 0 0-.218c-.026-.026-.073-.044-.218-.012a3 3 0 0 0-.437.173a.7.7 0 0 1-.506-.138l-.138-.07c.152-.213.261-.483.17-.623c-.158-.243-.852.009-.886-.115c-.019-.073.2-.238.439-.273a.41.41 0 0 0 .311.158a.3.3 0 0 0 .15-.065a1 1 0 0 0 .111.055a.4.4 0 0 0-.008.206c.043.175.23.3.288.264s-.022-.178.069-.276c.05-.055.1-.035.126-.08c.037-.061-.01-.165-.061-.25a.26.26 0 0 0 .176.112a.19.19 0 0 0 .173-.1c.085-.226-.609-.653-.575-.7a1.07 1.07 0 0 1 .575.3c.112.1.188.194.23.172s.036-.154-.012-.253c-.146-.3-.682-.278-.678-.357c0-.052.242-.135.46-.07c.133.042.22.128.264.093s.03-.1 0-.15c-.116-.19-.669-.023-.678-.068a.45.45 0 0 1 .352-.111c.16.007.241.08.3.034a.164.164 0 0 0 0-.218c-.026-.026-.073-.043-.218-.012a3 3 0 0 0-.437.173a.7.7 0 0 1-.506-.138a6 6 0 0 0-.472-.22a.3.3 0 0 0-.022-.228c-.158-.243-.852.009-.885-.115c-.022-.077.226-.26.482-.278a1 1 0 0 1 .116 0c.272.026.4.19.46.149c.045-.031.05-.175-.023-.253c-.217-.226-1.1.148-1.518.368a.7.7 0 0 1-.508.138m-11.178.667v-2.4h6.685v2.4ZM8 11.693l.265-.253h3.191l.242.253zm4.693 0c-.052.114-.366.131-.449 0a.2.2 0 0 1-.011-.182a.2.2 0 0 1 .044-.063a.04.04 0 0 1 .017-.008l.047-.006l.093.1l.04-.021l-.077-.083l.062-.01h.007a.26.26 0 0 1 .158.078c.043.04.094.132.066.195zm6 .879l.007-.011zm2.317.819L21 13.38zm0-2.372l-.01-.011zm-3.44-1.55a1 1 0 0 1 .226-.048a.45.45 0 0 1 .356.115c-.008.038-.385-.069-.582 0zm0 .27a1 1 0 0 1 .168-.076c.218-.067.458.017.46.069c0 .071-.437.056-.628.28zm-3.382.426V7.672l3.191-.072v2.972a2 2 0 0 0-.233-.045a3 3 0 0 0-.356-.022a3 3 0 0 0-.349.019zm-.072 4.845l-.018-.216h.074l.075-.01a.7.7 0 0 1 .238-.005l.054.01l.013.172c0 .013.01.11.032.257l-.439.024a4 4 0 0 1-.029-.232m.405 1.484l-.063-.134l.426-.083q.031.065.065.128zm1.153-.24l-.552.115a2 2 0 0 1-.074-.125l.08-.015l.552-.108l1.283-.252a1 1 0 0 1-.034.124zm.874.184q-.126.074-.314.156a1.3 1.3 0 0 1-.528.159h-.039a.6.6 0 0 1-.208-.054l.209-.05zm-1.823-1.231l-.006-.035l.1.01h.255zm1.921.385a.9.9 0 0 0 .033-.327a.7.7 0 0 1-.1.309l-.4-.109a.6.6 0 0 0 .269-.2a.6.6 0 0 0 .093-.317l.045-.014l.061-.021l.051-.02q.074-.028.136-.055l.089-.038l.01.1l.014.139a4.4 4.4 0 0 1 .037.643zm.247-1.647l-.048.015l-.159.048l-.095.027l-.024.007l-.069.017a4 4 0 0 1 .143-.693c.062-.22.1-.365.031-.508a.44.44 0 0 0-.331-.223a1 1 0 0 0-.113-.01a.94.94 0 0 0-.505.163a1 1 0 0 0-.213.186a1.83 1.83 0 0 0-.354 1.118v.175h-.133v-.072a3.2 3.2 0 0 1 .159-1.312a1.4 1.4 0 0 1 .227-.378a1.1 1.1 0 0 1 .962-.386a.6.6 0 0 1 .27.108a.5.5 0 0 1 .164.19a.5.5 0 0 1 .054.23c.059-.2.076-.3.018-.4a.44.44 0 0 0-.236-.183a1 1 0 0 0-.14-.038h-.021a1 1 0 0 0-.139-.01a1 1 0 0 0-.152.01a1.29 1.29 0 0 0-1 .707a3 3 0 0 0-.214 1.468v.073h-.321v-.068a3.9 3.9 0 0 1 .326-1.983a2 2 0 0 1 .128-.2q.041-.055.085-.107l.013-.014a1.66 1.66 0 0 1 .64-.443a1.4 1.4 0 0 1 .715-.09a.79.79 0 0 1 .6.4a1.08 1.08 0 0 1-.032.838A5 5 0 0 0 16.9 13.9zm.317 2.73a1.9 1.9 0 0 1-.85.471a2.4 2.4 0 0 1-.7.189h-.06a.94.94 0 0 1-.414-.092a1 1 0 0 1-.283-.2a1 1 0 0 1-.075-.079l-.077-.094l.365-.087l.087-.02a.7.7 0 0 0 .168.127a.57.57 0 0 0 .294.06a1.8 1.8 0 0 0 .559-.165a1.6 1.6 0 0 0 .664-.374l.042-.059l.43-.1V15.9l-.32.067v-.116l.33-.065l-.336-.091q-.015-.194-.044-.435c-.026-.221-.059-.5-.072-.807v-.027a.23.23 0 0 1 .058-.1a.24.24 0 0 1 .274-.074l.057.017v.051a9 9 0 0 0 .082.931c.084.614.139 1.049-.179 1.424m.444-4.381a5.3 5.3 0 0 0-.324 1.434v.04l-.036.018a3 3 0 0 1-.273.115l-.1.037v-.107a5.7 5.7 0 0 1 .318-1.588c.116-.353.18-.547.071-.733a.77.77 0 0 0-.563-.325a1.5 1.5 0 0 0-.236-.018a1.96 1.96 0 0 0-.879.215a2 2 0 0 0-.479.345a2 2 0 0 0-.169.194a2 2 0 0 0-.074.107a2 2 0 0 0-.114.2A4.1 4.1 0 0 0 14.5 14.2v.077h-.077a5 5 0 0 1-.306-.023l-.061-.006v-.061a4.55 4.55 0 0 1 .265-1.954q.042-.102.1-.2q.029-.054.06-.107a2.2 2.2 0 0 1 .393-.486q.067-.063.141-.12a2.55 2.55 0 0 1 1.824-.521a1.16 1.16 0 0 1 .866.479c.195.313.086.622-.051 1.016m1.446 2.511h-.15V14.7a.4.4 0 0 0 .15-.074zm.186-.485v-.038a.32.32 0 0 0-.184-.211a2 2 0 0 1-.15-.091a.14.14 0 0 1-.068-.112a.2.2 0 0 1 .068-.122a.4.4 0 0 1 .15-.09a.3.3 0 0 1 .207-.007c.216.092.12.546.239.642q-.127.016-.266.029zm-.3-1.679c.02-.013.06.04.119.094a.4.4 0 0 0 .143.092a2 2 0 0 0 .11.166q-.131.05-.253.1l-.115.053a.4.4 0 0 0 .054-.118c.038-.186-.103-.362-.067-.387zM20 13.23a.3.3 0 0 0 0 .068c-.255-.079-.73.074-.758-.028c-.012-.044.064-.123.18-.186c.107.117.219.191.289.169s.086-.134.1-.261h.029a.8.8 0 0 1 .265.077a.25.25 0 0 0-.105.161m-.02-.63c.158-.068.42.086.425.218c0 .052-.036.091-.089.127a.2.2 0 0 0-.035-.053c-.079-.082-.246-.085-.446-.045a.3.3 0 0 1 .145-.247m-.08-.344c-.092 0-.219-.023-.343-.029c-.118-.077-.261-.128-.258-.228l.006-.029a1 1 0 0 1 .134-.026a1 1 0 0 1 .116 0a.8.8 0 0 1 .317.1c.012.069.018.144.028.21zm-.175-.475a.22.22 0 0 1 .112.126a3 3 0 0 0-.356-.1a.3.3 0 0 1 .244-.028zM20 9.764q.046.05.039.082c-.006.021-.044.036-.1.037A1 1 0 0 0 20 9.764m-1.052-.087v-.095h.15v.107q.036-.02.084-.044l.019.006a.27.27 0 0 1 .137.21a.26.26 0 0 0-.184.1a.3.3 0 0 0-.023.22l-.033-.034a1 1 0 0 0-.15-.1c-.092-.053-.175-.1-.172-.177s.076-.147.17-.193zm0 .981a.5.5 0 0 0 .15-.134a.37.37 0 0 0 .081-.194c.122.287.4.594.538.552c.159-.05.035-.558.265-.656c.158-.067.42.086.425.218c.007.161-.37.195-.4.415a.3.3 0 0 0 .036.17a5.3 5.3 0 0 0-.855.359l-.088.047a1 1 0 0 1-.15.069a.44.44 0 0 1-.268.022a3 3 0 0 0-.437-.173a.4.4 0 0 0-.17-.013a.48.48 0 0 0-.068-.4a.9.9 0 0 0-.433-.306v-.313c.042-.031.1-.092.168-.153a1.05 1.05 0 0 1 .575-.3c.034.049-.66.475-.575.7a.19.19 0 0 0 .173.1a.27.27 0 0 0 .176-.11c-.051.084-.1.187-.061.248c.027.045.076.026.126.081c.092.1.016.246.069.276s.245-.09.288-.265c.047-.191-.094-.367-.057-.391s.143.182.31.2a.3.3 0 0 0 .18-.049zm-.771-.225l-.007.012zm.643-4.278h-.35l-.34-.625c.212-.343.282-.76.131-.886c-.191-.161-.757.126-1.048.541c-.205.291-.362.771-.193.92s.656-.057.934-.347l.054-.06l.427.457h-1.959l-.325-.582l-.044-.557a1.162 1.162 0 1 0-.776-.008l-.077.511l-.468.636H13.32V4.883h-.864v1.272h-.975v.621h7.339zm-2.784-2.024h-.575l-.083.558a.851.851 0 1 1 .7 0zM9 4.529H6.76l.214-.329v-.836l-.3-.46h-.7l-.383.5v.82l.294.306h-.744V2.506h-.506v2.023h-.169V2.651h-.222v1.878h-.222V2.973h-.284v1.556H3.6V2.805h-.268v1.724h-.138V2.613h-.207v1.916H2.8V3.2h-.387v1.329h-.165v1.044H9Zm-.355.69H2.413v-.336h6.232z"
            ></path></svg
          >
          <div class="w-full text-base font-semibold">
            Study room/Office
          </div>
          <div class="w-full text-sm">
            Dusting, vacuuming, sanitizing.
          </div>
        </div>
      </label>
    </li>
  </ul>
</div>
<div class="w-full px-2 md:px-16 mb-6 md:mb-5">
  <label
    class="block tracking-wide text-gray-700 text-base font-bold mb-2"
    for="additional-areas"
  >
    Additional areas
  </label>
  <input
    class="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-800"
    id="additional-areas"
    name="additional_areas"
    type="text"
    placeholder="Gym, Ironing, etc"
  />
</div>

<div class="flex-row w-full px-2 md:px-16 mb-6 md:mb-5">
  <label
    class="block tracking-wide text-gray-700 text-base font-bold mb-2"
  >
    Would you prefer the company to provide the necessary cleaning
    supplies or would you prefer to provide them yourself? <span
      class="text-red-500">*</span
    >
  </label>
  <div class="grid md:grid-cols-2 gap-5">
    <div class="flex items-center ps-4 border border-gray-200 rounded">
      <input
        id="bordered-radio-1"
        type="radio"
        value="The company"
        name="cleaning_supplies"
        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
        required
      />
      <label
        for="bordered-radio-1"
        class="w-full py-4 ms-2 text-sm font-medium text-gray-900"
        >The company will provide the necessary cleaning supplies.</label
      >
    </div>
    <div class="flex items-center ps-4 border border-gray-200 rounded">
      <input
        id="bordered-radio-2"
        type="radio"
        value="The client"
        name="cleaning_supplies"
        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
      />
      <label
        for="bordered-radio-2"
        class="w-full py-4 ms-2 text-sm font-medium text-gray-900"
        >I would prefer to provide the cleaning supplies myself.</label
      >
    </div>
  </div>
</div>
<div class="flex-row w-full px-2 md:px-16 mb-6 md:mb-5">
  <label
    class="block tracking-wide text-gray-700 text-base font-bold mb-2"
  >
    Do you have pets? <span class="text-red-500">*</span>
  </label>
  <div class="grid grid-cols-3 gap-5">
    <div class="flex items-center ps-4 border border-gray-200 rounded">
      <input
        id="pets-radio-1"
        type="radio"
        value="Yes"
        name="pets"
        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
        required
      />
      <label
        for="pets-radio-1"
        class="w-full py-4 ms-2 text-sm font-medium text-gray-900"
        >Yes</label
      >
    </div>
    <div class="flex items-center ps-4 border border-gray-200 rounded">
      <input
        id="pets-radio-2"
        type="radio"
        value="No"
        name="pets"
        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
      />
      <label
        for="pets-radio-2"
        class="w-full py-4 ms-2 text-sm font-medium text-gray-900"
        >No</label
      >
    </div>
  </div>
</div>
<div class="w-full px-2 md:px-16 mb-6 md:mb-8">
  <label
    class="block tracking-wide text-gray-700 text-base font-bold mb-2"
    for="any-requirements"
  >
    Any special requirements?
  </label>
  <input
    class="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-800"
    id="any-requirements"
    name="additional_requirements"
    type="text"
  />
</div>`,
  'End of Tenancy Cleaning': `  <div
  class="flex justify-between items-center w-full px-5 md:px-20 my-2 pb-5 border-b-4 border-dotted"
>
  <label for="bedrooms" class="font-semibold text-lg text-muted"
    >Bedrooms <span class="text-red-500">*</span></label
  >
  <div
    class="h-10 w-28 bg-gray-50 flex border border-gray-200 rounded items-center mt-1"
  >
    <button
      type="button"
      id="decrement-button-bedrooms"
      data-input-counter="quantity-bedrooms"
      data-operation="decrement"
      class="cursor-pointer outline-none focus:outline-none border-r border-gray-200 transition-all text-gray-500 hover:text-blue-600"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4 mx-2"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clip-rule="evenodd"></path>
      </svg>
    </button>
    <input
      name="bedrooms"
      maxlength="1"
      min="1"
      type="text"
      id="quantity-bedrooms"
      class="px-2 text-center appearance-none outline-none text-gray-800 w-full bg-transparent"
      value="1"
      oninput="this.value = this.value.replace(/[^1-9]/g, '');"
      required
    />
    <button
      type="button"
      id="increment-button-bedrooms"
      data-input-counter="quantity-bedrooms"
      data-operation="increment"
      class="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-500 hover:text-blue-600"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4 mx-2 fill-current"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
          clip-rule="evenodd"></path>
      </svg>
    </button>
  </div>
</div>
<div
  class="flex justify-between items-center w-full px-5 md:px-20 my-2 pb-5 border-b-4 border-dotted"
>
  <label for="bathrooms" class="font-semibold text-lg text-muted"
    >Bathrooms <span class="text-red-500">*</span></label
  >
  <div
    class="h-10 w-28 bg-gray-50 flex border border-gray-200 rounded items-center mt-1"
  >
    <button
      type="button"
      id="decrement-button-bathrooms"
      data-input-counter="quantity-bathrooms"
      data-operation="decrement"
      class="cursor-pointer outline-none focus:outline-none border-r border-gray-200 transition-all text-gray-500 hover:text-blue-600"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4 mx-2"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clip-rule="evenodd"></path>
      </svg>
    </button>
    <input
      name="bathrooms"
      maxlength="1"
      min="1"
      type="text"
      id="quantity-bathrooms"
      class="px-2 text-center appearance-none outline-none text-gray-800 w-full bg-transparent"
      value="1"
      oninput="this.value = this.value.replace(/[^1-9]/g, '');"
      required
    />
    <button
      type="button"
      id="increment-button-bathrooms"
      data-input-counter="quantity-bathrooms"
      data-operation="increment"
      class="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-500 hover:text-blue-600"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4 mx-2 fill-current"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
          clip-rule="evenodd"></path>
      </svg>
    </button>
  </div>
</div>
<div
  class="flex-row justify-between items-center w-full px-2 md:px-20 my-2 pb-5"
>
  <input
    type="hidden"
    name="sites-adittionals"
    value="End of Tenancy Cleaning"
  />
  <label class="mb-5 text-lg font-medium text-gray-900">
    Which of the following apply to your property? <span
      class="text-red-500">*</span
    >
  </label>

  <ul class="grid w-full gap-2 md:gap-10 md:grid-cols-2 mt-4">
    <li class="h-full">
      <input
        type="checkbox"
        id="kitchen-option"
        name="kitchen"
        class="hidden peer"
      />
      <label
        for="kitchen-option"
        class="inline-flex h-44 items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-[#494f8c] peer-checked:bg-[#494f8c] hover:text-gray-600 peer-checked:text-white hover:bg-gray-50"
      >
        <div class="block">
          <svg
            class="mb-2 w-20 h-20"
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            ><path
              fill="currentColor"
              d="m7.424 16.122l.176-.029l.899 5.573l-.176.029zm-2.401 5.506l.625-5.53l.177.02l-.625 5.53zM7.99 19.71l-.028-.178H5.45l-.02.178zm-.894-3.56l.388 3.371h.18l-.392-3.393zm.632 3.941l-.042-.37h-.179l.045.39zm-3.114-.005l.658-3.994l.175.03l-.658 3.993zm2.735-1.642l-1.777-.011l-.02.177l1.818.012zm-2.3.163l.303.002l.02-.178l-.295-.002zm1.13.018l.393.896h.194l-.392-.895zm-.954-3.269c-.054.079-.245.417-.176.6h1.8l1.608-.016a.46.46 0 0 0 .091-.416a.65.65 0 0 0-.275-.389a1.07 1.07 0 0 0-.63-.2h-.017l-1.564.021a1.05 1.05 0 0 0-.487.124a.94.94 0 0 0-.35.276m-.3.354a1.5 1.5 0 0 1 .193-.429a1 1 0 0 1 .36-.3a4 4 0 0 0-.566.05c-.09.022-.2.061-.226.116s0 .1.035.2a4 4 0 0 0 .203.363m7.703.462l.175-.028l.9 5.573l-.176.028zm-2.398 5.495l.623-5.531l.177.02l-.623 5.531zm2.965-1.907l-.028-.177h-2.514l-.02.177zm-.262.382l-.042-.371h-.179l.045.391zm-.065-.57l-.39-3.393l-.177.02l.388 3.373zm-3.05.565l.659-3.994l.175.029l-.658 3.994zm.435-1.48l.304.002l.02-.177l-.295-.002zm2.301-.162l-1.777-.012l-.02.178l1.817.012zm-1.17.181l.393.896h.194l-.392-.895zm2.092-3.49a1.06 1.06 0 0 0-.63-.2h-.015l-1.564.021a1.06 1.06 0 0 0-.487.123a.94.94 0 0 0-.35.28c-.055.079-.245.417-.176.6h1.8l1.608-.014a.45.45 0 0 0 .091-.415a.65.65 0 0 0-.277-.395m-3.153.148a1 1 0 0 1 .358-.3a5 5 0 0 0-.565.049c-.089.023-.2.062-.225.117s0 .1.035.2a4 4 0 0 0 .2.366a1.5 1.5 0 0 1 .197-.432m6.744-7.503h2.486v.337h-2.486zm0-1.783h2.486v.343h-2.486zM5.258 5.035l-.983-.13v3.9h.983zM5.12 8.558h-.683V5.205l.683.07zm10.452.244h1.287V4.95h-1.287zm.21-3.6h.845v3.356h-.846zm-1.523 3.6h1.252V4.95h-1.252zm.272-3.6h.777v3.356h-.777zm-7.05 3.6h2V5.035h-2zm.284-3.5H9.2v3.256H7.764zm-2.277 3.5h1.935V5.035H5.487zm.26-3.5h1.4v3.256h-1.4zM2.352 2.476h.318v6.548h-.318zm.376 6.548h.37l.03-5.917l-.387-.566zm.426 0h.832v-4.5l-.8-1.323Zm2.186-4.26L4.09 4.58v4.444h1.252zm-.024 4.1h-1.1v-4.03l1.1.145zm4.241-4.097H5.4v4.257h4.16zM9.542 8.86H5.43V4.98h4.113zm4.15.155l.33-.034V4.706l-.33.212zm3.281-4.333H14.11v4.3h2.863zm-.06 4.178h-2.71V4.891h2.71zM5.057 11.077l.356-.042a.13.13 0 0 0 .092-.06l.174-.3q-.235.042-.472.064l-.376.036a3 3 0 0 1-.287.012H4.31l.188.23a.13.13 0 0 0 .09.045zM4.7 10.67c0-.074-.04-.126-.076-.126s-.075.052-.075.126v.027h.148zm-.442-.115a.136.136 0 0 0 .2.12a.24.24 0 0 1 .06-.167a.135.135 0 0 0-.262.051zm.776.024a.15.15 0 0 0 .024.084l.141-.013l.145-.016a.2.2 0 0 0 .01-.055a.161.161 0 0 0-.32 0m.581.015a.14.14 0 0 0-.138-.124a.2.2 0 0 0-.055.012a.24.24 0 0 1 .02.1v.043zm-.684-.05a.09.09 0 0 0-.088.088a.1.1 0 0 0 .016.05l.107-.01a.2.2 0 0 1-.019-.093v-.033zm2.463.084v.16l.054.174a.084.084 0 0 0 .08.06l.3-.001a.08.08 0 0 0 .078-.052l.077-.192a.1.1 0 0 0 .006-.032v-.117a.084.084 0 0 0-.083-.084h-.428a.084.084 0 0 0-.084.084m8.724-.049v.308l.013.031a.034.034 0 0 0 .032.023h.338a.04.04 0 0 0 .033-.023v-.339a.035.035 0 0 0-.035-.035h-.34a.035.035 0 0 0-.04.035m.045-.122h.08v-.335h-.08zm.238 0h.092v-.385h-.092v.135zm-.1-.192h.042v.192h-.042zm-9.084-.116l.057.148l.131.177a.2.2 0 0 1 .068-.017l.038-.276l.134-.185l-.045-.061l-.01-.04l-.118-.047l-.148.093l.183.041l-.1.3zm.85-.202l-.024.372l-.072.15a.1.1 0 0 1 .042.021l.08-.164l.283-.24l-.1-.185zm-.41.444l-.02-.048l-.09.114h.067zm-.355-.31l-.04-.093l-.042-.01l-.072.08zm.476-.17l-.06.083l.095.124l-.035.045H7.8l.2-.316l-.256-.135l-.128.06l.022.082zm4.085.545h.115v.25h-.115zm.143-1.003a.7.7 0 0 0-.036-.255a.35.35 0 0 0-.075-.149a.17.17 0 0 0-.093-.06a.16.16 0 0 0-.105.019c-.043.025-.067.072-.084.168a1.5 1.5 0 0 0-.006.325h.058a1.4 1.4 0 0 1 .005-.309c.017-.094.037-.118.056-.129a.1.1 0 0 1 .065-.013a.12.12 0 0 1 .061.043a.3.3 0 0 1 .062.124a.7.7 0 0 1 .034.238a1 1 0 0 1-.072.3a.57.57 0 0 0-.054.291a2 2 0 0 1 .048.362h.058a2 2 0 0 0-.05-.375a.55.55 0 0 1 .052-.26a1 1 0 0 0 .076-.32m-.34.66l.073.076v-.077l-.074-.072v-.487h-.06v.054l-.019.973h-.033v.342h.16l.004-.337h-.052zM9.905 7.18h3.28v.132h-3.28Zm0-.273h3.28v.132h-3.28Zm0-.536h3.28v.357h-3.28zm1.635 3.51H9.833V6.245h3.45V9.88h-1.368l-.018.087h1.473V6.158H9.746v3.81h1.794zm-8.772.533l.1.554l.157-.059v-.544zm5.302.396l-.028.068h3.452v-.355h.035v-.179H8.158l-.022.02l-.078.172a.2.2 0 0 1 .027.093v.117a.2.2 0 0 1-.014.064m8.567.068v-.534h-.087v.124a.12.12 0 0 1 .074.112v.3zm-13.525 0h1.164l-.153-.187h.1a.22.22 0 0 1-.047-.136a.225.225 0 0 1 .152-.212H3.113zm2.26-.468a.2.2 0 0 1 .1-.026a.23.23 0 0 1 .224.195h.008l.141-.028l-.189.328h1.677l-.019-.063a.2.2 0 0 1-.008-.05v-.136a.17.17 0 0 1 .05-.12l-.12-.165H5.27a.24.24 0 0 1 .103.065m-.777.051h.028a.16.16 0 0 1 .144.112a.18.18 0 0 1 .163-.112a.2.2 0 0 1 .045.006a.25.25 0 0 1 .143-.12h-.653a.22.22 0 0 1 .13.114m11.51.007v-.124h-4.16v.055h.086v.366h-.23v-.366h.042v-.055h-.12v.184h.052v.35h4.26v-.3a.12.12 0 0 1 .07-.11M5.432 11.57v-.179l-2.762-.032l-.058-.248l.18-.078l-.104-.573l-.064-.238h-.35v1.597l2.81.028h.007v.189zm.125-.33H17.83v.13H5.558zm8.016 1.345l-.02-.02l-.128-.075l.567.3v-.544h-.979l-.2-.116h1.174v-.7H10.24v.7h-.116v-.7h-.275v.7h-.116v-.7H7.094v.7H4.767l-.009.006h-.006l.177-.228l-2.655-.026h.246v1.251h12.088zm-4.062-.738h-2.19a.073.073 0 0 1 0-.145h2.19a.073.073 0 1 1 0 .145m6.991-.818h-.338a.12.12 0 0 1-.087-.037L8 10.983l-.008.02a.17.17 0 0 1-.158.106h-.3a.17.17 0 0 1-.163-.12v-.007H5.606l-.02.035a.21.21 0 0 1-.156.1l-.36.047l-.48-.024a.21.21 0 0 1-.154-.077l-.078-.084h-1.25l-.419.205l.028.119l2.655.03l.12-.155h12.3l-.79-.181h-.415a.12.12 0 0 1-.084.032m-6.2.124l-.122-.117h3.12l.326.116zm-7.835 2.086h12.068v.268H2.468zm3.974.377H2.384v.036h3.884v1.17l.174-.004zM6.268 19h-.706l-.038.333h.896l-.152-.347zm-1.012 0h-.218l-.055.333h.235zm1.012-2.914h.174v2.29h-.174zm-3.884 3.247h2.29L4.73 19H2.384zm4.464-5.68h6.116v1.206a1.2 1.2 0 0 1 .591.224v-1.467h-6.91v1.2h.2zm5.087 5.68h.663L12.56 19h-.77zm-4.058 0L7.823 19h-.156l.04.333zM9.943 19h-1.81l.052.333h1.703zm-3.298-2.914h.203v2.293h-.203zm6.32.655l.417 2.592h.176v-3.209l-.594.005zm-6.117 1.943h-.203v.403l.108.246H7.4L7.361 19h-.513zm4.755.65L11.457 19h-.684l-.038.333zm1.361-.682V19h-.098l.04.333h.168zM10.466 19h-.215l-.055.333h.233zm-5.885.898l.074-.449h-2.27v.449zm7.405-.449l.032.073h.602l-.008-.073zm-7.096.449h.264l.051-.449h-.24zm1.581-.449h-.96l-.002.022h.972zm.332 0l.01.022h.602l-.002-.022zm.916 0l.003.022H7.9l-.003-.022zm-.255.449l-.014-.123H5.474l-.013.123zM2.058 2.035v20h20v-20zm19.783 13.262l-1.972-.662l.038-9.314l1.934-.459zm0-10.662l-1.933.458V3.904l1.928-.625zm0-1.585l-2.054.666l-16.182.065l.132.217l15.958-.063l-.043 10.666h-2.036v.218h2.126l2.1.708v6.292H2.275v-1.8h-.007v-6.084h.006v-.282h.11v-.038h-.11v-.109h.194v-.27h-.193v-.11h.246v-1.248h-.247V4.004h.02v-.218h-.02V2.252h19.567ZM9.795 19.897l.074-.449H8.204l.073.45zm-1.827 0l-.02-.123h-.19l.013.123zm2.135 0h.262l.051-.449h-.239zm1.551-.449h-.932l-.008.073h.972zm1.01.45l-.009-.073H10.68l-.008.072zm-7.078-7.78l.002-.694l1.014.003l-.002.694zm1.13.004l.003-.696h.26l-.001.696zm9.146.007H17.5v-.703h-3.39v.703h1.636zm-2.188 1.478h.32v1.261h-.32zm.435-.758l.558.295h-.029v.463h-.529v1.261h1.637v-2.623H14.11zm3.391 2.02v-2.624h-1.638v2.623h1.32zm-1.754.115h-2.072v.2a1 1 0 0 1 .09.105h3.3v-.3h-1.318zM3.108 9.082h-.217l.005 1.22l.083-.017v-.028h.134z"
            ></path></svg
          >
          <div class="w-full text-2xl font-semibold">Kitchen</div>
        </div>
      </label>
    </li>
    <li>
      <input
        type="checkbox"
        id="utility-room-option"
        name="utility_room"
        class="hidden peer"
      />
      <label
        for="utility-room-option"
        class="inline-flex h-44 items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-[#494f8c] peer-checked:bg-[#494f8c] hover:text-gray-600 peer-checked:text-white hover:bg-gray-50"
      >
        <div class="block">
          <svg
            class="mb-2 w-20 h-20"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            ><path
              fill="currentColor"
              d="M25 6a1 1 0 1 1 0-2a1 1 0 1 1 0 2m-9 20a8 8 0 1 1 0-16a8 8 0 0 1 0 16M6 5a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1m15-1a1 1 0 1 1 0 2a1 1 0 1 1 0-2m1 12.028c-.983.152-1.721.975-1.721 1.972s.738 1.82 1.721 1.971c-.842 2.341-3.132 4.03-5.825 4.03C12.77 24 10 21.307 10 18c0-3.31 2.77-6 6.175-6c2.693 0 4.983 1.686 5.825 4.027M27 2H5a1 1 0 0 0-1 1v26a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1"
            ></path></svg
          >
          <div class="w-full text-2xl font-semibold">Utility room</div>
        </div>
      </label>
    </li>
    <li>
      <input
        type="checkbox"
        id="office-option"
        name="office"
        class="hidden peer"
      />
      <label
        for="office-option"
        class="inline-flex h-44 items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-[#494f8c] peer-checked:bg-[#494f8c] hover:text-gray-600 peer-checked:text-white hover:bg-gray-50"
      >
        <div class="block">
          <svg
            class="mb-2 w-20 h-20"
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            ><path
              fill="currentColor"
              d="M13.427 18.776v.288h.142v-.315zm-.107.288v-.268l-.153.028v.24zm.695 1.887a.306.356 0 0 1-.306.356a.306.356 0 0 1-.306-.356a.306.356 0 0 1 .306-.356a.306.356 0 0 1 .306.356m-2.605-1.626h.142v.533h-.142zm-.26 0h.153v.533h-.153zm5.621-.303a.4.4 0 0 0-.1-.288l-.055-.026h-.013c-.063 0-.119.068-.148.166l.316.172zm.779 1.664c.1 0 .178-.145.178-.316s-.082-.315-.178-.315s-.177.144-.177.315s.081.316.177.316m-.269-.659h-.089v-.011a.33.33 0 0 0-.141.308c0 .171.082.316.178.316a.14.14 0 0 0 .112-.073a.6.6 0 0 1-.034-.2a.5.5 0 0 1 .057-.248a.23.23 0 0 0-.083-.092m-3.572.498a.36.36 0 0 1 .291.155a.295.295 0 0 0-.581 0a.36.36 0 0 1 .29-.155m-.558-2.491v.134l.697-.195l.206-.046l.002-.005l-.852.028zm.97-1.156l.124.037l.077.042l-.174-.463l-1.465-.4l-.018-.152l1.421.39l-.386-1.022l-1.1.125l-.121-1.016l.368-.063l.224-.076l.023-.12l-1.409-.374l-.362.04l-.15.029v.057l.023.093l.765.275l.122 1.215l-.693.079l-.043.006l.766.21l.015.151l-.932-.255v.207a.14.14 0 0 0 .1.137l.865.26l.034.335l.092.03l.011.374l.334.1zm-.721-.218l-.636.087l-.034-.289zm-7.731-5.293l1.764-.051l-.214-.511l-1.674.057zm1.313-.467l.145.341l-1.192.034l-.084-.337zm-1.139 5.968v-.114l-.108-.129v.243zm3.209.504v-.264l-.23.02v.275zm-2.268.283v-.327l-.219.03v.323zm-.8-.95l.35.476l-.051-2.106v-1.357l-.596-.579l-.002 3.159l.284.387l.015.018zm-.21-3.665l.606.461l2.775-.118l-.786-.438Zm3.429 1.709v-1.113l-2.778.12v1.168zm-.523 2.249l.064-.006l.459-.044v-2.057l-2.776.175l.04 2.147l.379-.037l.08-.011v.003zM6.675 7.5H2.887l.059 3.359l3.729-.575zm-.192 2.679l-3.351.516l-.053-3.021l3.4-.007zM2 2.106v19.788h20V2.106Zm19.752 19.539H2.248V2.355h19.5Zm-5.789-3.043l.107.058h.449l-.065-.031zm2.189.245a.675.675 0 0 0-.627-.47h-.753l.031.27v.153h-.005a.6.6 0 0 1 .044.226v.06l.11.061a.5.5 0 0 0 .026-.162a.37.37 0 0 0-.117-.3h.666a.39.39 0 0 1 .362.272l.936 2.668q-.002.012.006.023h.285a.5.5 0 0 0-.025-.131zm-11.896.104a.44.44 0 0 1 .394-.269h4.737l1.016-.3H6.65a.72.72 0 0 0-.65.439l-1.166 2.66a.5.5 0 0 0-.038.164h.284l.01-.034zM18.152 9.4a3 3 0 0 0-.437-.172a.5.5 0 0 0-.145-.016V7.42L14 7.5v2.791l1.986.319a3.1 3.1 0 0 0-1.229.6a2 2 0 0 0-.126.112H10.65v-1.034h3.232V7.5H6.767v2.791h3.162v1.027H7.586l.058.137l-2.085.06l-.049-.2h-.852l-.729.459v.147h10.237l-.054.107H3.93v.215h.7v5.4l-.322.621h.644l.576-1.288l-.328-.018l-.045-4.723l8.867-.007a6.6 6.6 0 0 0-.165 2.93c0 .016.014.13.045.3l.57 1.512h-.1v.161l-.087.014l-.019.732l-.094.006l-.034.132l-.267.059l-2.555.714l-.032.39h.153l-.026-.138l2.517-.472l.278.105l-.52 1.227v.408l.194.027l.034-.247v-.007l.563-1.35l.385-.071l2.321 1.1l.074.159h.2l-.029-.391L15.5 18.47l.981.054l.215.105l-.04-.328l-1.926-.294l-.021-.12h-.081l-.023-.725l-.088-.03v-.106a2 2 0 0 0 .205.243a1.2 1.2 0 0 0 .339.246v.006L15.4 18l.633.1l-.378-.473v-.032a3.7 3.7 0 0 0 .725-.193a2.5 2.5 0 0 0 1-.467c.311-.321.25-.751.158-1.4a8.5 8.5 0 0 1-.111-1.606a5.8 5.8 0 0 1 .473-2.09q.062-.15.106-.275l.018.019c.058.047.139-.027.3-.034a.45.45 0 0 1 .356.115c-.009.045-.562-.122-.678.069c-.03.049-.031.125 0 .149s.131-.051.264-.092c.218-.066.458.017.46.069c0 .079-.532.052-.678.357c-.048.1-.053.23-.012.253s.118-.075.23-.173a1.05 1.05 0 0 1 .575-.3c.034.049-.66.475-.575.7a.19.19 0 0 0 .173.1a.27.27 0 0 0 .176-.11c-.051.084-.1.187-.061.248c.027.045.076.026.126.08c.078.084.036.2.053.255a.65.65 0 0 1-.474.12a3 3 0 0 0-.437-.171c-.146-.032-.193-.014-.219.01a.166.166 0 0 0 0 .22c.058.047.139-.027.3-.035a.46.46 0 0 1 .357.115c-.01.046-.563-.121-.679.069c-.03.05-.031.126 0 .15s.131-.051.265-.092c.217-.067.457.017.46.069c0 .079-.532.05-.679.356c-.048.1-.053.232-.011.253s.117-.074.23-.172a1.05 1.05 0 0 1 .575-.3c.034.049-.661.475-.575.7a.1.1 0 0 0 .022.037v1.91a4 4 0 0 1 .04.529a.27.27 0 0 0 .219.255a6.6 6.6 0 0 0 1.78.066a.31.31 0 0 0 .273-.3v-2.5a.32.32 0 0 0-.321-.32l-.148.023a1.2 1.2 0 0 0 .454-.713a.37.37 0 0 0 .255.1c.167-.014.273-.221.311-.2s-.105.2-.058.39c.043.176.23.3.288.266c.058-.035-.022-.178.069-.276c.05-.055.1-.036.126-.081c.037-.061-.01-.164-.061-.248a.27.27 0 0 0 .176.11a.19.19 0 0 0 .173-.1c.085-.227-.609-.653-.575-.7a1.05 1.05 0 0 1 .575.3c.112.1.188.194.23.173s.036-.154-.012-.253c-.146-.3-.682-.278-.678-.357c0-.052.242-.135.46-.07c.133.042.22.127.264.093s.03-.1 0-.15c-.116-.19-.669-.023-.678-.068a.45.45 0 0 1 .356-.115c.16.007.241.08.3.034a.164.164 0 0 0 0-.218c-.026-.026-.073-.044-.218-.012a3 3 0 0 0-.437.173a.7.7 0 0 1-.506-.138l-.138-.07c.152-.213.261-.483.17-.623c-.158-.243-.852.009-.886-.115c-.019-.073.2-.238.439-.273a.41.41 0 0 0 .311.158a.3.3 0 0 0 .15-.065a1 1 0 0 0 .111.055a.4.4 0 0 0-.008.206c.043.175.23.3.288.264s-.022-.178.069-.276c.05-.055.1-.035.126-.08c.037-.061-.01-.165-.061-.25a.26.26 0 0 0 .176.112a.19.19 0 0 0 .173-.1c.085-.226-.609-.653-.575-.7a1.07 1.07 0 0 1 .575.3c.112.1.188.194.23.172s.036-.154-.012-.253c-.146-.3-.682-.278-.678-.357c0-.052.242-.135.46-.07c.133.042.22.128.264.093s.03-.1 0-.15c-.116-.19-.669-.023-.678-.068a.45.45 0 0 1 .352-.111c.16.007.241.08.3.034a.164.164 0 0 0 0-.218c-.026-.026-.073-.043-.218-.012a3 3 0 0 0-.437.173a.7.7 0 0 1-.506-.138a6 6 0 0 0-.472-.22a.3.3 0 0 0-.022-.228c-.158-.243-.852.009-.885-.115c-.022-.077.226-.26.482-.278a1 1 0 0 1 .116 0c.272.026.4.19.46.149c.045-.031.05-.175-.023-.253c-.217-.226-1.1.148-1.518.368a.7.7 0 0 1-.508.138m-11.178.667v-2.4h6.685v2.4ZM8 11.693l.265-.253h3.191l.242.253zm4.693 0c-.052.114-.366.131-.449 0a.2.2 0 0 1-.011-.182a.2.2 0 0 1 .044-.063a.04.04 0 0 1 .017-.008l.047-.006l.093.1l.04-.021l-.077-.083l.062-.01h.007a.26.26 0 0 1 .158.078c.043.04.094.132.066.195zm6 .879l.007-.011zm2.317.819L21 13.38zm0-2.372l-.01-.011zm-3.44-1.55a1 1 0 0 1 .226-.048a.45.45 0 0 1 .356.115c-.008.038-.385-.069-.582 0zm0 .27a1 1 0 0 1 .168-.076c.218-.067.458.017.46.069c0 .071-.437.056-.628.28zm-3.382.426V7.672l3.191-.072v2.972a2 2 0 0 0-.233-.045a3 3 0 0 0-.356-.022a3 3 0 0 0-.349.019zm-.072 4.845l-.018-.216h.074l.075-.01a.7.7 0 0 1 .238-.005l.054.01l.013.172c0 .013.01.11.032.257l-.439.024a4 4 0 0 1-.029-.232m.405 1.484l-.063-.134l.426-.083q.031.065.065.128zm1.153-.24l-.552.115a2 2 0 0 1-.074-.125l.08-.015l.552-.108l1.283-.252a1 1 0 0 1-.034.124zm.874.184q-.126.074-.314.156a1.3 1.3 0 0 1-.528.159h-.039a.6.6 0 0 1-.208-.054l.209-.05zm-1.823-1.231l-.006-.035l.1.01h.255zm1.921.385a.9.9 0 0 0 .033-.327a.7.7 0 0 1-.1.309l-.4-.109a.6.6 0 0 0 .269-.2a.6.6 0 0 0 .093-.317l.045-.014l.061-.021l.051-.02q.074-.028.136-.055l.089-.038l.01.1l.014.139a4.4 4.4 0 0 1 .037.643zm.247-1.647l-.048.015l-.159.048l-.095.027l-.024.007l-.069.017a4 4 0 0 1 .143-.693c.062-.22.1-.365.031-.508a.44.44 0 0 0-.331-.223a1 1 0 0 0-.113-.01a.94.94 0 0 0-.505.163a1 1 0 0 0-.213.186a1.83 1.83 0 0 0-.354 1.118v.175h-.133v-.072a3.2 3.2 0 0 1 .159-1.312a1.4 1.4 0 0 1 .227-.378a1.1 1.1 0 0 1 .962-.386a.6.6 0 0 1 .27.108a.5.5 0 0 1 .164.19a.5.5 0 0 1 .054.23c.059-.2.076-.3.018-.4a.44.44 0 0 0-.236-.183a1 1 0 0 0-.14-.038h-.021a1 1 0 0 0-.139-.01a1 1 0 0 0-.152.01a1.29 1.29 0 0 0-1 .707a3 3 0 0 0-.214 1.468v.073h-.321v-.068a3.9 3.9 0 0 1 .326-1.983a2 2 0 0 1 .128-.2q.041-.055.085-.107l.013-.014a1.66 1.66 0 0 1 .64-.443a1.4 1.4 0 0 1 .715-.09a.79.79 0 0 1 .6.4a1.08 1.08 0 0 1-.032.838A5 5 0 0 0 16.9 13.9zm.317 2.73a1.9 1.9 0 0 1-.85.471a2.4 2.4 0 0 1-.7.189h-.06a.94.94 0 0 1-.414-.092a1 1 0 0 1-.283-.2a1 1 0 0 1-.075-.079l-.077-.094l.365-.087l.087-.02a.7.7 0 0 0 .168.127a.57.57 0 0 0 .294.06a1.8 1.8 0 0 0 .559-.165a1.6 1.6 0 0 0 .664-.374l.042-.059l.43-.1V15.9l-.32.067v-.116l.33-.065l-.336-.091q-.015-.194-.044-.435c-.026-.221-.059-.5-.072-.807v-.027a.23.23 0 0 1 .058-.1a.24.24 0 0 1 .274-.074l.057.017v.051a9 9 0 0 0 .082.931c.084.614.139 1.049-.179 1.424m.444-4.381a5.3 5.3 0 0 0-.324 1.434v.04l-.036.018a3 3 0 0 1-.273.115l-.1.037v-.107a5.7 5.7 0 0 1 .318-1.588c.116-.353.18-.547.071-.733a.77.77 0 0 0-.563-.325a1.5 1.5 0 0 0-.236-.018a1.96 1.96 0 0 0-.879.215a2 2 0 0 0-.479.345a2 2 0 0 0-.169.194a2 2 0 0 0-.074.107a2 2 0 0 0-.114.2A4.1 4.1 0 0 0 14.5 14.2v.077h-.077a5 5 0 0 1-.306-.023l-.061-.006v-.061a4.55 4.55 0 0 1 .265-1.954q.042-.102.1-.2q.029-.054.06-.107a2.2 2.2 0 0 1 .393-.486q.067-.063.141-.12a2.55 2.55 0 0 1 1.824-.521a1.16 1.16 0 0 1 .866.479c.195.313.086.622-.051 1.016m1.446 2.511h-.15V14.7a.4.4 0 0 0 .15-.074zm.186-.485v-.038a.32.32 0 0 0-.184-.211a2 2 0 0 1-.15-.091a.14.14 0 0 1-.068-.112a.2.2 0 0 1 .068-.122a.4.4 0 0 1 .15-.09a.3.3 0 0 1 .207-.007c.216.092.12.546.239.642q-.127.016-.266.029zm-.3-1.679c.02-.013.06.04.119.094a.4.4 0 0 0 .143.092a2 2 0 0 0 .11.166q-.131.05-.253.1l-.115.053a.4.4 0 0 0 .054-.118c.038-.186-.103-.362-.067-.387zM20 13.23a.3.3 0 0 0 0 .068c-.255-.079-.73.074-.758-.028c-.012-.044.064-.123.18-.186c.107.117.219.191.289.169s.086-.134.1-.261h.029a.8.8 0 0 1 .265.077a.25.25 0 0 0-.105.161m-.02-.63c.158-.068.42.086.425.218c0 .052-.036.091-.089.127a.2.2 0 0 0-.035-.053c-.079-.082-.246-.085-.446-.045a.3.3 0 0 1 .145-.247m-.08-.344c-.092 0-.219-.023-.343-.029c-.118-.077-.261-.128-.258-.228l.006-.029a1 1 0 0 1 .134-.026a1 1 0 0 1 .116 0a.8.8 0 0 1 .317.1c.012.069.018.144.028.21zm-.175-.475a.22.22 0 0 1 .112.126a3 3 0 0 0-.356-.1a.3.3 0 0 1 .244-.028zM20 9.764q.046.05.039.082c-.006.021-.044.036-.1.037A1 1 0 0 0 20 9.764m-1.052-.087v-.095h.15v.107q.036-.02.084-.044l.019.006a.27.27 0 0 1 .137.21a.26.26 0 0 0-.184.1a.3.3 0 0 0-.023.22l-.033-.034a1 1 0 0 0-.15-.1c-.092-.053-.175-.1-.172-.177s.076-.147.17-.193zm0 .981a.5.5 0 0 0 .15-.134a.37.37 0 0 0 .081-.194c.122.287.4.594.538.552c.159-.05.035-.558.265-.656c.158-.067.42.086.425.218c.007.161-.37.195-.4.415a.3.3 0 0 0 .036.17a5.3 5.3 0 0 0-.855.359l-.088.047a1 1 0 0 1-.15.069a.44.44 0 0 1-.268.022a3 3 0 0 0-.437-.173a.4.4 0 0 0-.17-.013a.48.48 0 0 0-.068-.4a.9.9 0 0 0-.433-.306v-.313c.042-.031.1-.092.168-.153a1.05 1.05 0 0 1 .575-.3c.034.049-.66.475-.575.7a.19.19 0 0 0 .173.1a.27.27 0 0 0 .176-.11c-.051.084-.1.187-.061.248c.027.045.076.026.126.081c.092.1.016.246.069.276s.245-.09.288-.265c.047-.191-.094-.367-.057-.391s.143.182.31.2a.3.3 0 0 0 .18-.049zm-.771-.225l-.007.012zm.643-4.278h-.35l-.34-.625c.212-.343.282-.76.131-.886c-.191-.161-.757.126-1.048.541c-.205.291-.362.771-.193.92s.656-.057.934-.347l.054-.06l.427.457h-1.959l-.325-.582l-.044-.557a1.162 1.162 0 1 0-.776-.008l-.077.511l-.468.636H13.32V4.883h-.864v1.272h-.975v.621h7.339zm-2.784-2.024h-.575l-.083.558a.851.851 0 1 1 .7 0zM9 4.529H6.76l.214-.329v-.836l-.3-.46h-.7l-.383.5v.82l.294.306h-.744V2.506h-.506v2.023h-.169V2.651h-.222v1.878h-.222V2.973h-.284v1.556H3.6V2.805h-.268v1.724h-.138V2.613h-.207v1.916H2.8V3.2h-.387v1.329h-.165v1.044H9Zm-.355.69H2.413v-.336h6.232z"
            ></path></svg
          >
          <div class="w-full text-2xl font-semibold">Study room/Office</div>
        </div>
      </label>
    </li>
    <li>
      <input
        type="checkbox"
        id="living-room-option"
        name="living_room"
        class="hidden peer"
      />
      <label
        for="living-room-option"
        class="inline-flex h-44 items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-[#494f8c] peer-checked:bg-[#494f8c] hover:text-gray-600 peer-checked:text-white hover:bg-gray-50"
      >
        <div class="block">
          <svg
            class="mb-2 w-20 h-20"
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            ><path
              fill="currentColor"
              d="M9.934 14.41c-1.962 0-3.329.338-3.329.641c0 .218.711.455 1.844.57l.024.092a1 1 0 0 1 .031.193a1.15 1.15 0 0 1-.133.575c-.148.292-.34.326-.321.442s.26.227.434.135a.43.43 0 0 0 .177-.211a.76.76 0 0 0 .048-.366a4 4 0 0 1 .022-.746l.009-.088c.339.027.709.042 1.1.044q-.002.047-.011.089a1.2 1.2 0 0 1-.108.379l.075.053c.114.13.433.01.428-.009a2.2 2.2 0 0 1-.07-.424v-.089c.44-.006.848-.028 1.213-.064l-.016.091a1.25 1.25 0 0 0 .218.976a.63.63 0 0 0 .273.173c.153.049.413.064.466-.077c.041-.108-.06-.243-.177-.317c-.14-.09-.2-.082-.273-.154a1.03 1.03 0 0 1-.251-.628a1 1 0 0 1 .01-.091c1.017-.121 1.646-.343 1.646-.548c.001-.303-1.363-.641-3.329-.641m-3.403.641a.2.2 0 0 1 .029-.1l-.438.086l-.122.018v-.081v.18l.008.537l1.052-.236c-.327-.108-.529-.243-.529-.404m-.829-1.572l-1.157-.087l.002-.022v-.003l-.008.002l.053 1.905l1.163.447l.002-.031zm-.62-.168v-.049a.16.16 0 0 1 .025-.11a.11.11 0 0 1 .079-.048h-.078a.15.15 0 0 0-.12.068a.2.2 0 0 0-.036.1l.035.03zm.042-.059l.009.063l.82.062v.022h.038a1.2 1.2 0 0 0 .335-.025l.481-.1c.03-.006.056.024.055.062l-.009.33v.014l.047.3a.1.1 0 0 0 .024-.044a.1.1 0 0 0 0-.031l-.024-.338l-.028-.362v-.106a.1.1 0 0 0-.028-.059l-.02-.013l-.026-.006h-.01l-.408.061l-.074.011l-.082.012q-.08.011-.162.018h.006l-.1.006H5.9l-.69.02a.07.07 0 0 0-.056.031a.1.1 0 0 0-.03.072m2.769-.04c.076-.012.181-.029.24-.04l-1-.061l-.222.04v.017zm.015.039l-1-.044l.028.355l.032.339a.15.15 0 0 1-.017.085l.953.094zm-1.279 1.614a2.8 2.8 0 0 1 1.252-.4v-.249l-1.842.284l.013.478zm1.471-.434l.005-1.188l-.131.011v1.194zm-.373-.289l-.767-.064l-.044.007v.024a.06.06 0 0 1-.04.072l-.9.148v.094h.012zm-1.659 1.641v.124l1.412-.342a5 5 0 0 1-.221-.052zm-.982-.172l.879.306v-.133l-.081-.025l-.124.032l-.001-.022l-.646-.248l-.034-.011zm5.348-1.282v-.115l-.541.107h.041q.25 0 .5.008m-1.798-1.248l-.715-.056l-.038-.032l-.23.035l.888.069l-.001-.006zm-.436.082l-.016.011l-.018.005v1.245a10 10 0 0 1 .412-.044l-.03-1.238l-.986-.077v-.022v.08zm.571-.096h.021a1 1 0 0 0 .287-.022l.411-.092c.025-.006.048.021.047.055l-.007.292v.013l.041.267a.07.07 0 0 0 .022-.04v-.028l-.027-.3l-.03-.412a.08.08 0 0 0-.023-.052l-.018-.012l-.022-.005h-.008l-.483.075a2 2 0 0 1-.221.02l-.648.02a.06.06 0 0 0-.048.028a.1.1 0 0 0-.013.06l.007.052l.705.056v.021zm1.661.602v-.729l-.851-.04l.024.312l.027.3a.13.13 0 0 1-.014.074zm-.908.657l.883-.179V13.8l-1.568.254l.008.309c.221-.02.453-.031.677-.037m1.076.009l.006-1.4l-.1.01v1.387zm-6.359 7.282l1.691-.763l.022-.521l-1.7.767zm.159-.392l1.394-.63v.133l-1.394.623zM2 2v20h20V2Zm19.7 4.2l-3.338.73v.27l3.338-.731v15.175h-9.714l6.789-5.228l-5.487-1.231a.6.6 0 0 1-.177.142l5.27 1.181l-6.669 5.136H2.3v-.09a.1.1 0 0 0 .017.035a.06.06 0 0 0 .051.023l.34-.014l.022-.006l3.086-1.4a.08.08 0 0 0 .045-.077v-1.426a.1.1 0 0 0-.028-.066a.06.06 0 0 0-.06-.013l-1.117.382a.19.19 0 0 1-.188-.041a.28.28 0 0 1-.089-.2l-.07-3.21l.148-.034l.388-.087l-.286-.11v-.01l-.106.024l-.148.034v-.069a.1.1 0 0 0-.025-.061a.06.06 0 0 0-.044-.019h-.01l-1.87.32a.08.08 0 0 0-.055.055v-.221l.034-.01l.953-.163l-.618-.507a.26.26 0 0 0-.2-.055l-.165.017V8.16l3.55.472v-.906L2.3 7.069v-.09l3.624.67v5.4l.04.021h-.055h.046a2 2 0 0 0 .254-.023l.518-.077a.1.1 0 0 0-.048 0l-.309.046l-.074.011v-5.59l-4-.743V4.686L12.374 7.3v-.273L2.3 4.413V2.356h19.4ZM8.015 12.988v-.012a.04.04 0 0 1 0-.02v-.01a.14.14 0 0 1 .022-.1a.1.1 0 0 1 .075-.044l.649-.02a2 2 0 0 0 .216-.019l.454-.07h.029a.09.09 0 0 1 .076.026a.12.12 0 0 1 .037.083v.037l.15-.028l.042-.008h.059l.551.034l.09.006l.1-.012l.17-.02l.153-.023h.036l.27-.04V8.894a.2.2 0 0 0-.058-.142a.13.13 0 0 0-.13-.03l-.074.03a.16.16 0 0 0-.114-.117l-.692-.15a.1.1 0 0 0-.064 0l-.005-.019l-.114-.022l-.2-.041a.13.13 0 0 0-.082.012a.13.13 0 0 0-.072-.042l-.435-.085a.13.13 0 0 0-.079.011a.13.13 0 0 0-.072-.04l-.179-.035l-.1-.02l-.061-.014l-.084-.016v2.334a.2.2 0 0 0 .052.132v.006a.2.2 0 0 0-.057.139v.277a3 3 0 0 0 .091.375a.18.18 0 0 0-.095.165v1.187l-.543.016a.13.13 0 0 0-.1.061a.2.2 0 0 0-.031.089l.032.027zm1.042-.444q.001.04-.005.077v.121l-.154.024a2 2 0 0 1-.169.017V11.6l.007.017c.054.154.113.293.166.418a2.6 2.6 0 0 1 .146.394l.009.051v.043zm1.769-3.508a.5.5 0 0 1 .225-.142v3.7l-.071.011a1.5 1.5 0 0 0-.042-.26l-.014-.066a5 5 0 0 1-.046-.243c-.023-.146-.031-.308-.047-.631c-.007-.151-.009-.248-.011-.315a.7.7 0 0 0-.029-.244a1 1 0 0 0-.067-.158c-.028-.059-.072-.149-.148-.321a1 1 0 0 1-.084-.212a.9.9 0 0 1 .028-.426a1.3 1.3 0 0 1 .092-.222l.072-.152c.035-.077.057-.134.075-.179a.6.6 0 0 1 .067-.14M10.1 10.2c.008-.062.018-.133.026-.228a2 2 0 0 0 .005-.3c0-.08-.008-.19-.005-.414a3 3 0 0 0-.022-.6l.691.15l-.056.077l-.026.037a.7.7 0 0 0-.089.179c-.018.045-.037.1-.07.168l-.071.15a1.4 1.4 0 0 0-.1.254a1.1 1.1 0 0 0-.031.527a1.3 1.3 0 0 0 .1.25c.078.175.122.267.152.328a1 1 0 0 1 .055.13a.5.5 0 0 1 .021.186c0 .069 0 .167.011.322c0 .082.008.155.011.219s0 .1.008.138c.008.119.016.209.03.3q.033.193.062.32l.018.083v.024l.009.051v.079l-.358.042a4 4 0 0 1-.014-.343c-.002-.167 0-.237 0-.294v-.04a1 1 0 0 0 0-.123a2.6 2.6 0 0 0-.162-.543l-.084-.224a1.4 1.4 0 0 1-.064-.193a2 2 0 0 1-.063-.384a1.4 1.4 0 0 1 .016-.328m-.444-1.3a.9.9 0 0 1 .067-.328l.221.043l.015.075v.571c0 .23 0 .344.005.427a2 2 0 0 1-.005.272c-.008.09-.017.158-.025.218a1.6 1.6 0 0 0-.017.36v.067a3 3 0 0 0 .064.357a2 2 0 0 0 .072.215c.019.05.044.115.081.219l.062.173l.035.1a1 1 0 0 1 .055.218v.133c0 .056-.006.14 0 .3v.358l-.113.014a1.4 1.4 0 0 0-.09-.364l-.042-.127a4 4 0 0 1-.159-.654a1.6 1.6 0 0 1 0-.449a1.5 1.5 0 0 0-.018-.524a1 1 0 0 0-.05-.182c-.019-.06-.041-.128-.077-.282a5 5 0 0 1-.1-.565a3.3 3.3 0 0 1 .019-.639zm-.088-.35l-.005.018l-.018.066l-.007.034q-.008.033-.012.069l-.005.035c0 .037-.009.075-.012.117a3.6 3.6 0 0 0 .018.683a5 5 0 0 0 .105.589a3 3 0 0 0 .082.3a1 1 0 0 1 .044.16a1.3 1.3 0 0 1 .015.457a1.8 1.8 0 0 0 0 .5a4 4 0 0 0 .166.688l.043.129a1.4 1.4 0 0 1 .08.306l-.2.032a1 1 0 0 1-.045-.273a6 6 0 0 0-.026-.246a3 3 0 0 0-.069-.388a1.1 1.1 0 0 1-.039-.294v-.185a1.5 1.5 0 0 0-.022-.38A1.3 1.3 0 0 0 9.5 10.5a1 1 0 0 0-.091-.125a.3.3 0 0 1-.068-.114a.8.8 0 0 1 0-.3c.015-.168.031-.26.043-.328A.6.6 0 0 0 9.4 9.4a.6.6 0 0 0-.09-.242a1 1 0 0 1-.085-.171c0-.012-.009-.025-.014-.041v-.013L9.193 8.9v-.017l-.01-.044v-.022l-.009-.045V8.74l-.018-.04l-.006-.046v-.033l-.005-.059v-.099Zm-.585-.115a2.2 2.2 0 0 0 .1.631a1.3 1.3 0 0 0 .1.2a.4.4 0 0 1 .065.168a.4.4 0 0 1-.01.158c-.011.067-.029.169-.045.345a.9.9 0 0 0 .011.387a.5.5 0 0 0 .1.177a1 1 0 0 1 .076.1a1.1 1.1 0 0 1 .132.406a1.4 1.4 0 0 1 .019.335v.2a1.3 1.3 0 0 0 .044.339a3 3 0 0 1 .065.365q.016.138.026.241a2 2 0 0 0 .038.271l-.081.01l-.025-.014a.3.3 0 0 1-.018-.069c0-.024-.009-.051-.013-.08l-.025-.141v-.024l-.022-.105a7 7 0 0 1-.059-.258c0-.019-.007-.039-.012-.058a2 2 0 0 1-.027-.2a4 4 0 0 1 0-.5q.002-.071.007-.119a2 2 0 0 0 0-.207a.75.75 0 0 0-.1-.446a.26.26 0 0 0-.127-.092a.15.15 0 0 1-.077-.051c-.024-.028-.029-.044-.066-.164l-.041-.131a5 5 0 0 0-.076-.228a.4.4 0 0 1-.028-.1a.6.6 0 0 1 0-.187q.008-.065.018-.174a4 4 0 0 0 0-.62v-.111l-.005-.048v-.01L8.9 8.572v-.018l-.007-.047v-.022l-.009-.05v-.018zm-.255.008c.029.144.044.292.053.384a3.5 3.5 0 0 1 0 .578a3 3 0 0 1-.016.165a.8.8 0 0 0 0 .243a.6.6 0 0 0 .038.141a5 5 0 0 1 .114.351a.6.6 0 0 0 .1.23a.3.3 0 0 0 .135.093a.1.1 0 0 1 .063.042a.6.6 0 0 1 .06.334a2 2 0 0 1 0 .185c0 .034 0 .072-.008.124s-.005.113-.006.2a9 9 0 0 0-.236-.5l-.039-.077c-.049-.1-.1-.183-.135-.25l-.008-.009a1 1 0 0 0-.114-.166zm0 2.342a7.3 7.3 0 0 1 .573 1.27l.012.06c.016.074.035.158.061.265l.02.1l.027.154l.01.066a.1.1 0 0 0-.051 0l-.18.02q-.002-.058.006-.162v-.018a.4.4 0 0 0 0-.06a1.9 1.9 0 0 0-.171-.522a4.2 4.2 0 0 1-.306-.935zm5.601 2.077a.1.1 0 0 0 .033.062a.073.073 0 0 0 .113-.024a.11.11 0 0 0-.02-.135a.1.1 0 0 0-.046-.017h-.015a.08.08 0 0 0-.052.04a.1.1 0 0 0-.013.074m-.307.023a.07.07 0 0 0 .074.056a.059.059 0 1 0 0-.113a.07.07 0 0 0-.074.057m.221-.019l.011-.008a.2.2 0 0 1 .026-.117a.077.077 0 0 0-.1-.052a.1.1 0 0 0-.048.056a.15.15 0 0 1 .111.121m.148-.249c-.005 0-.018.017-.024.05h.046q-.01-.051-.022-.05m.136.11a.1.1 0 0 0 .012-.049c0-.04-.017-.061-.024-.061s-.023.024-.023.061v.012a.1.1 0 0 1 .035.037m.132.082a.05.05 0 0 0 .046-.055a.05.05 0 0 0-.046-.055a.05.05 0 0 0-.046.055a.05.05 0 0 0 .046.055m.784.132a.072.072 0 1 0-.071.084a.08.08 0 0 0 .071-.084m-.336.074a.07.07 0 0 0 .057.023a.07.07 0 0 0 .058-.024a.07.07 0 0 0-.058-.022a.07.07 0 0 0-.057.023M4.67 17.941a.44.44 0 0 0-.062.24v.279a.134.134 0 0 0 .12.144h.094l1.129-.426a1 1 0 0 0 .028-.106l.026-.612l-.022.009zm1.179-.647l-1.38-1.132l.031 1.553l.017.02l1.31-.435zm8.842-4.278a.09.09 0 0 0 .079-.094a.1.1 0 0 0-.025-.067a.11.11 0 0 1-.086.043a.1.1 0 0 1-.041-.009a.1.1 0 0 0-.005.033a.087.087 0 0 0 .078.094m.091-.24a.2.2 0 0 1 .062.146v.013a.09.09 0 0 0 .045-.081a.08.08 0 0 0-.073-.088a.1.1 0 0 0-.034.01m.111.224a.3.3 0 0 0 .079.013a.2.2 0 0 0 .062-.008a.1.1 0 0 1 .042-.077a.2.2 0 0 0-.1-.026h-.017a.17.17 0 0 1-.066.098m.353-.141h-.007a.06.06 0 0 0-.055.047a.2.2 0 0 1 .046.013a.2.2 0 0 1 .016-.06m-.195-.032a.2.2 0 0 1 .069.03a.2.2 0 0 1 .034-.051a.1.1 0 0 0-.04-.011a.07.07 0 0 0-.063.032m-.126-.089a.2.2 0 0 1 .031.065l.018.009a.14.14 0 0 1 .086-.1a.08.08 0 0 0-.06-.028a.074.074 0 0 0-.075.054m-.033-.098c-.032 0-.053.023-.053.036l.021.007a.2.2 0 0 1 .032-.043m-1.036.117v.56l.075.007l1.683.152l.029.003v-.642l-.029-.002l-.07-.005v.353l-1.605-.123v-.303h-.008zm-.938-2.344l4.108-.151V6.65l-4.108 1.069zm3.821-3.474v3.141l-3.65.177l-.014-2.434zm-.597 4.545l.193-.034l-.004-.637l-.191-.023Zm-2.807-.028l2.732.033l-.001-.702l-2.731.112zm-2.47 2.108l8.315 1.233l-.009-.419l-8.306-1.029zm9.364.631l-.005-.369l-.942.533l.009.407zm-2.803.938l.006-.461l-5.043-.748v.36zm.746-.351l-.594-.088l-.003.401zm-6.974-1.526l2.046.254l5.985.686l.861-.476l-1.887-.175l-.645.26l-.008-.001l-5.125-.552l.01-.123l-.312-.024zm6.996.199l.007.001l.015.001V3.864l-.624-.573v10.363l.542-.187h.031zm-4.412-.146v-1.624l1.981.022v1.809l1.68.159V3.244l-4.936 2.295l.07 7.64zm2.346-1.733h-.325l-.813-.009l-1.207-.013l-.521-.007v-.731l2.878-.118l.266.032v.8zm-3.285-3.929L17.1 6.539v3.809l-4.258.156zm-6.996 5.767l-.874-.067l-.045-.036l-.294.043l1.066.08v-.006z"
            ></path></svg
          >
          <div class="w-full text-2xl font-semibold">Living room</div>
        </div>
      </label>
    </li>
  </ul>
</div>
<div class="w-full px-2 md:px-16 mb-6 md:mb-5">
  <label
    class="block tracking-wide text-gray-700 text-base font-bold mb-2"
    for="additional-areas"
  >
    Additional areas
  </label>
  <input
    class="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-800"
    id="additional-areas"
    name="additional_areas"
    type="text"
    placeholder="Gym, Ironing, etc"
  />
</div>
<div class="flex-row w-full px-2 md:px-16 mb-6 md:mb-5">
  <label class="block tracking-wide text-gray-700 text-base font-bold mb-2">
    Which of the following items are included in the deep cleaning service?
  </label>
  <ul class="grid w-full gap-2 md:gap-10 md:grid-cols-3 mt-4">
    <li class="h-full">
      <input
        type="checkbox"
        id="oven-option"
        name="oven"
        class="hidden peer"
      />
      <label
        for="oven-option"
        class="inline-flex h-44 items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-[#494f8c] peer-checked:bg-[#494f8c] hover:text-gray-600 peer-checked:text-white hover:bg-gray-50"
      >
        <div class="block">
          <svg
            class="mb-2 w-20 h-20"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            ><path
              fill="currentColor"
              d="M3 9V3h18v6zm0 12V10h18v11zM8 7q.425 0 .713-.288T9 6t-.288-.712T8 5t-.712.288T7 6t.288.713T8 7m2 7h4v-2h-4zm2-7q.425 0 .713-.288T13 6t-.288-.712T12 5t-.712.288T11 6t.288.713T12 7m4 0q.425 0 .713-.288T17 6t-.288-.712T16 5t-.712.288T15 6t.288.713T16 7"
            ></path></svg
          >
          <div class="w-full text-2xl font-semibold">Oven</div>
        </div>
      </label>
    </li>
    <li>
      <input
        type="checkbox"
        id="fridge-option"
        name="fridge"
        class="hidden peer"
      />
      <label
        for="fridge-option"
        class="inline-flex h-44 items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-[#494f8c] peer-checked:bg-[#494f8c] hover:text-gray-600 peer-checked:text-white hover:bg-gray-50"
      >
        <div class="block">
          <svg
            class="mb-2 w-20 h-20"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            ><path
              fill="currentColor"
              d="M7 2h10a2 2 0 0 1 2 2v5H5V4a2 2 0 0 1 2-2m12 17a2 2 0 0 1-2 2v1h-2v-1H9v1H7v-1a2 2 0 0 1-2-2v-9h14zM8 5v2h2V5zm0 7v3h2v-3z"
            ></path></svg
          >
          <div class="w-full text-2xl font-semibold">Fridge</div>
        </div>
      </label>
    </li>
    <li>
      <input
        type="checkbox"
        id="washing_machine-option"
        name="washing_machine"
        class="hidden peer"
      />
      <label
        for="washing_machine-option"
        class="inline-flex h-44 items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-[#494f8c] peer-checked:bg-[#494f8c] hover:text-gray-600 peer-checked:text-white hover:bg-gray-50"
      >
        <div class="block">
          <svg
            class="mb-2 w-20 h-20"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            ><path
              fill="currentColor"
              d="M14.83 11.17a4.01 4.01 0 0 1 0 5.66a4.01 4.01 0 0 1-5.66 0zM6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m1 2a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1m3 0a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1m2 4a6 6 0 0 0-6 6a6 6 0 0 0 6 6a6 6 0 0 0 6-6a6 6 0 0 0-6-6"
            ></path></svg
          >
          <div class="w-full text-2xl font-semibold">washing machine</div>
        </div>
      </label>
    </li>
  </ul>
</div>
<div class="flex-row w-full px-2 md:px-16 mb-6 md:mb-5">
  <label class="block tracking-wide text-gray-700 text-base font-bold mb-2">
    Would you like any of the following additional cleanings?
  </label>
  <ul class="grid w-full gap-2 md:gap-10 md:grid-cols-3 mt-4">
    <li class="h-full">
      <input
        input-option-checked="window-section"
        type="checkbox"
        id="window-option"
        name="window"
        class="hidden peer"
      />
      <label
        for="window-option"
        class="inline-flex h-44 items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-[#494f8c] peer-checked:bg-[#494f8c] hover:text-gray-600 peer-checked:text-white hover:bg-gray-50"
      >
        <div class="block">
          <svg
            class="mb-2 w-20 h-20"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            ><path
              fill="currentColor"
              d="M13 13h8v6q0 .825-.587 1.413T19 21h-6zm0-2V3h6q.825 0 1.413.588T21 5v6zm-2 0H3V5q0-.825.588-1.412T5 3h6zm0 2v8H5q-.825 0-1.412-.587T3 19v-6z"
            ></path></svg
          >

          <div class="w-full text-2xl font-semibold">Window</div>
        </div>
      </label>
    </li>
    <li class="h-full">
      <input
        input-option-checked="mattresses-section"
        type="checkbox"
        id="mattresses-option"
        name="mattresses"
        class="hidden peer"
      />
      <label
        for="mattresses-option"
        class="inline-flex h-44 items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-[#494f8c] peer-checked:bg-[#494f8c] hover:text-gray-600 peer-checked:text-white hover:bg-gray-50"
      >
        <div class="block">
          <svg
            class="mb-2 w-20 h-20"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512"
            ><path
              fill="currentColor"
              d="M256 64H64C28.7 64 0 92.7 0 128v256c0 35.3 28.7 64 64 64h192zm32 384h288c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H288zM64 160c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v192c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32z"
            ></path></svg
          >

          <div class="w-full text-2xl font-semibold">Mattresses</div>
        </div>
      </label>
    </li>
    <li class="h-full">
      <input
        input-option-checked="curtains-section"
        type="checkbox"
        id="curtains-option"
        name="curtains"
        class="hidden peer"
      />
      <label
        for="curtains-option"
        class="inline-flex h-44 items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-[#494f8c] peer-checked:bg-[#494f8c] hover:text-gray-600 peer-checked:text-white hover:bg-gray-50"
      >
        <div class="block">
          <svg
            class="mb-2 w-20 h-20"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            ><path
              fill="currentColor"
              d="M2 21v-2h2V3h16v16h2v2zm6.225-9q1.7 1.125 2.625 3.075T11.95 19h.1q.175-1.975 1.1-3.925T15.775 12q-1.7-1.125-2.625-3.075T12.05 5h-.1q-.175 1.975-1.1 3.925T8.225 12"
            ></path></svg
          >

          <div class="w-full text-2xl font-semibold">Curtains</div>
        </div>
      </label>
    </li>
  </ul>
</div>
<div id="window-section" class="hidden w-full">
  <div
    class="flex justify-between items-center w-full px-2 md:px-16 mb-6 md:mb-5"
  >
    <label for="windows-count" class="font-semibold text-lg text-muted"
      >How many windows do you have? <span class="text-red-500">*</span
      ></label
    >
    <div
      class="h-10 w-28 bg-gray-50 flex border border-gray-200 rounded items-center mt-1"
    >
      <button
        type="button"
        id="decrement-button-windows-count"
        data-input-counter="quantity-windows-count"
        data-operation="decrement"
        class="cursor-pointer outline-none focus:outline-none border-r border-gray-200 transition-all text-gray-500 hover:text-blue-600"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4 mx-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"></path>
        </svg>
      </button>
      <input
        name="windows_count"
        maxlength="1"
        min="1"
        type="text"
        id="quantity-windows-count"
        class="px-2 text-center appearance-none outline-none text-gray-800 w-full bg-transparent"
        value="1"
        oninput="this.value = this.value.replace(/[^1-9]/g, '');"
        disabled
      />
      <button
        type="button"
        id="increment-button-windows-count"
        data-input-counter="quantity-windows-count"
        data-operation="increment"
        class="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-500 hover:text-blue-600"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4 mx-2 fill-current"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
            clip-rule="evenodd"></path>
        </svg>
      </button>
    </div>
  </div>
  <div class="flex-row w-full px-2 md:px-16 mb-6 md:mb-5">
    <label
      class="block tracking-wide text-gray-700 text-base font-bold mb-2"
    >
      Which sides of the windows should we clean? <span class="text-red-500"
        >*</span
      >
    </label>
    <div class="grid grid-cols-3 gap-5">
      <div class="flex items-center ps-4 border border-gray-200 rounded">
        <input
          id="sides-to-clean-radio-1"
          type="radio"
          value="Outside"
          name="sides_to_clean"
          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
          required
          disabled
        />
        <label
          for="sides-to-clean-radio-1"
          class="w-full py-4 ms-2 text-sm font-medium text-gray-900"
          >Outside</label
        >
      </div>
      <div class="flex items-center ps-4 border border-gray-200 rounded">
        <input
          id="sides-to-clean-radio-2"
          type="radio"
          value="Inside"
          name="sides_to_clean"
          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
          disabled
        />
        <label
          for="sides-to-clean-radio-2"
          class="w-full py-4 ms-2 text-sm font-medium text-gray-900"
          >Inside</label
        >
      </div>
      <div class="flex items-center ps-4 border border-gray-200 rounded">
        <input
          id="sides-to-clean-radio-3"
          type="radio"
          value="Inside and Outside"
          name="sides_to_clean"
          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
          disabled
        />
        <label
          for="sides-to-clean-radio-3"
          class="w-full py-4 ms-2 text-sm font-medium text-gray-900"
          >Inside and Outside</label
        >
      </div>
    </div>
  </div>
</div>
<div id="mattresses-section" class="hidden w-full">
  <div
    class="flex justify-between items-center w-full px-2 md:px-16 mb-6 md:mb-5"
  >
    <label
      for="mattresses-single-count"
      class="font-semibold text-lg text-muted"
      >How many single matresses? <span class="text-red-500">*</span></label
    >
    <div
      class="h-10 w-28 bg-gray-50 flex border border-gray-200 rounded items-center mt-1"
    >
      <button
        type="button"
        id="decrement-button-mattresses-single-count"
        data-input-counter="quantity-mattresses-single-count"
        data-operation="decrement"
        class="cursor-pointer outline-none focus:outline-none border-r border-gray-200 transition-all text-gray-500 hover:text-blue-600"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4 mx-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"></path>
        </svg>
      </button>
      <input
        name="mattresses_single_count"
        maxlength="1"
        type="text"
        id="quantity-mattresses-single-count"
        class="px-2 text-center appearance-none outline-none text-gray-800 w-full bg-transparent"
        value="0"
        oninput="this.value = this.value.replace(/[^0-9]/g, '');"
        disabled
      />
      <button
        type="button"
        id="increment-button-mattresses-single-count"
        data-input-counter="quantity-mattresses-single-count"
        data-operation="increment"
        class="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-500 hover:text-blue-600"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4 mx-2 fill-current"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
            clip-rule="evenodd"></path>
        </svg>
      </button>
    </div>
  </div>
  <div
    class="flex justify-between items-center w-full px-2 md:px-16 mb-6 md:mb-5"
  >
    <label
      for="mattresses-double-count"
      class="font-semibold text-lg text-muted"
      >How many double matresses? <span class="text-red-500">*</span></label
    >
    <div
      class="h-10 w-28 bg-gray-50 flex border border-gray-200 rounded items-center mt-1"
    >
      <button
        type="button"
        id="decrement-button-mattresses-double-count"
        data-input-counter="quantity-mattresses-double-count"
        data-operation="decrement"
        class="cursor-pointer outline-none focus:outline-none border-r border-gray-200 transition-all text-gray-500 hover:text-blue-600"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4 mx-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"></path>
        </svg>
      </button>
      <input
        name="mattresses_double_count"
        maxlength="1"
        type="text"
        id="quantity-mattresses-double-count"
        class="px-2 text-center appearance-none outline-none text-gray-800 w-full bg-transparent"
        value="0"
        oninput="this.value = this.value.replace(/[^0-9]/g, '');"
        disabled
      />
      <button
        type="button"
        id="increment-button-mattresses-double-count"
        data-input-counter="quantity-mattresses-double-count"
        data-operation="increment"
        class="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-500 hover:text-blue-600"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4 mx-2 fill-current"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
            clip-rule="evenodd"></path>
        </svg>
      </button>
    </div>
  </div>
  <div
    class="flex justify-between items-center w-full px-2 md:px-16 mb-6 md:mb-5"
  >
    <label
      for="mattresses-king-size-count"
      class="font-semibold text-lg text-muted"
      >How many king size matresses? <span class="text-red-500">*</span
      ></label
    >
    <div
      class="h-10 w-28 bg-gray-50 flex border border-gray-200 rounded items-center mt-1"
    >
      <button
        type="button"
        id="decrement-button-mattresses-king-size-count"
        data-input-counter="quantity-mattresses-king-size-count"
        data-operation="decrement"
        class="cursor-pointer outline-none focus:outline-none border-r border-gray-200 transition-all text-gray-500 hover:text-blue-600"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4 mx-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"></path>
        </svg>
      </button>
      <input
        name="mattresses_king_size_count"
        maxlength="1"
        type="text"
        id="quantity-mattresses-king-size-count"
        class="px-2 text-center appearance-none outline-none text-gray-800 w-full bg-transparent"
        value="0"
        oninput="this.value = this.value.replace(/[^0-9]/g, '');"
        disabled
      />
      <button
        type="button"
        id="increment-button-mattresses-king-size-count"
        data-input-counter="quantity-mattresses-king-size-count"
        data-operation="increment"
        class="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-500 hover:text-blue-600"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4 mx-2 fill-current"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
            clip-rule="evenodd"></path>
        </svg>
      </button>
    </div>
  </div>
</div>
<div id="curtains-section" class="hidden w-full">
  <div
    class="flex justify-between items-center w-full px-2 md:px-16 mb-6 md:mb-5"
  >
    <label for="half_lenght -count" class="font-semibold text-lg text-muted"
      >How many pairs of half lenght cutrains? <span class="text-red-500"
        >*</span
      ></label
    >
    <div
      class="h-10 w-28 bg-gray-50 flex border border-gray-200 rounded items-center mt-1"
    >
      <button
        type="button"
        id="decrement-button-half_lenght -count"
        data-input-counter="quantity-half_lenght -count"
        data-operation="decrement"
        class="cursor-pointer outline-none focus:outline-none border-r border-gray-200 transition-all text-gray-500 hover:text-blue-600"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4 mx-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"></path>
        </svg>
      </button>
      <input
        name="half_lenght_count"
        maxlength="1"
        type="text"
        id="quantity-half_lenght -count"
        class="px-2 text-center appearance-none outline-none text-gray-800 w-full bg-transparent"
        value="0"
        oninput="this.value = this.value.replace(/[^0-9]/g, '');"
        disabled
      />
      <button
        type="button"
        id="increment-button-half_lenght -count"
        data-input-counter="quantity-half_lenght -count"
        data-operation="increment"
        class="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-500 hover:text-blue-600"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4 mx-2 fill-current"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
            clip-rule="evenodd"></path>
        </svg>
      </button>
    </div>
  </div>
  <div
    class="flex justify-between items-center w-full px-2 md:px-16 mb-6 md:mb-5"
  >
    <label for="full_lenght-count" class="font-semibold text-lg text-muted"
      >How many pairs of full lenght cutrains? <span class="text-red-500"
        >*</span
      ></label
    >
    <div
      class="h-10 w-28 bg-gray-50 flex border border-gray-200 rounded items-center mt-1"
    >
      <button
        type="button"
        id="decrement-button-full_lenght-count"
        data-input-counter="quantity-full_lenght-count"
        data-operation="decrement"
        class="cursor-pointer outline-none focus:outline-none border-r border-gray-200 transition-all text-gray-500 hover:text-blue-600"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4 mx-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"></path>
        </svg>
      </button>
      <input
        name="full_lenght_count"
        maxlength="1"
        type="text"
        id="quantity-full_lenght-count"
        class="px-2 text-center appearance-none outline-none text-gray-800 w-full bg-transparent"
        value="0"
        oninput="this.value = this.value.replace(/[^0-9]/g, '');"
        disabled
      />
      <button
        type="button"
        id="increment-button-full_lenght-count"
        data-input-counter="quantity-full_lenght-count"
        data-operation="increment"
        class="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-500 hover:text-blue-600"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4 mx-2 fill-current"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
            clip-rule="evenodd"></path>
        </svg>
      </button>
    </div>
  </div>
</div>
<div class="w-full px-2 md:px-16 mb-6 md:mb-8">
  <label
    class="block tracking-wide text-gray-700 text-base font-bold mb-2"
    for="any-requirements"
  >
    Any special requirements?
  </label>
  <input
    class="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-800"
    id="any-requirements"
    name="additional_requirements"
    type="text"
  />
</div>`,
  'Regular Cleaning Luxury': `
        <label for="regular-cleaning-luxury-requirements">Luxury requirements for Regular Cleaning:</label>
        <input type="text" id="regular-cleaning-luxury-requirements" name="regular-cleaning-luxury-requirements">
    `,
  'Antiviral Sanitisation': `
        <label for="antiviral-sanitisation-area">Area for Antiviral Sanitisation:</label>
        <input type="text" id="antiviral-sanitisation-area" name="antiviral-sanitisation-area">
    `,
  'Office Cleaning': `
        <label for="office-cleaning-size">Size of the office for Office Cleaning:</label>
        <input type="text" id="office-cleaning-size" name="office-cleaning-size">
    `,
  'Carpet Cleaning': `
        <label for="carpet-cleaning-area">Area for Carpet Cleaning:</label>
        <input type="text" id="carpet-cleaning-area" name="carpet-cleaning-area">
    `,
  'Mattress Cleaning': `
        <label for="mattress-cleaning-size">Size of the mattress for Mattress Cleaning:</label>
        <input type="text" id="mattress-cleaning-size" name="mattress-cleaning-size">
    `,
  'Upholstery Cleaning': `
        <label for="upholstery-cleaning-material">Material for Upholstery Cleaning:</label>
        <input type="text" id="upholstery-cleaning-material" name="upholstery-cleaning-material">
    `,
  'Window Cleaning': `
        <label for="window-cleaning-number">Number of windows for Window Cleaning:</label>
        <input type="text" id="window-cleaning-number" name="window-cleaning-number">
    `,
  'Curtain Cleaning': `
        <label for="curtain-cleaning-type">Type of curtains for Curtain Cleaning:</label>
        <input type="text" id="curtain-cleaning-type" name="curtain-cleaning-type">
    `,
  'Oven Cleaning': `
        <label for="oven-cleaning-size">Size of the oven for Oven Cleaning:</label>
        <input type="text" id="oven-cleaning-size" name="oven-cleaning-size">
    `,
  'Rubbish Removal': `
        <label for="rubbish-removal-type">Type of rubbish for Rubbish Removal:</label>
        <input type="text" id="rubbish-removal-type" name="rubbish-removal-type">
    `,
  Gardening: `
        <label for="gardening-area">Area for Gardening:</label>
        <input type="text" id="gardening-area" name="gardening-area">
    `,
  'Maintenance service': `
        <label for="maintenance-service-description">Description for Maintenance Service:</label>
        <textarea id="maintenance-service-description" name="maintenance-service-description" rows="4"></textarea>
    `,
};