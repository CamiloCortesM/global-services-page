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
        value="kitchen"
        name="additional_task"
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
        value="utility_room"
        name="additional_task"
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
        value="office"
        name="additional_task"
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
        value="more than weekly"
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
        value="yes"
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
        value="no"
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
  'One off Cleaning': `<div
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
        value="kitchen"
        name="additional_task"
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
        value="utility_room"
        name="additional_task"
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
        value="office"
        name="additional_task"
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
        value="the company"
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
        value="the client"
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
        value="yes"
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
        value="no"
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
  'End of Tenancy Cleaning': `<div
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
        value="kitchen"
        name="task_areas"
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
        value="utility_room"
        name="task_areas"
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
        value="office"
        name="task_areas"
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
            viewBox="0 0 24 24"
            ><path
              fill="currentColor"
              d="M13.427 18.776v.288h.142v-.315zm-.107.288v-.268l-.153.028v.24zm.695 1.887a.306.356 0 0 1-.306.356a.306.356 0 0 1-.306-.356a.306.356 0 0 1 .306-.356a.306.356 0 0 1 .306.356m-2.605-1.626h.142v.533h-.142zm-.26 0h.153v.533h-.153zm5.621-.303a.4.4 0 0 0-.1-.288l-.055-.026h-.013c-.063 0-.119.068-.148.166l.316.172zm.779 1.664c.1 0 .178-.145.178-.316s-.082-.315-.178-.315s-.177.144-.177.315s.081.316.177.316m-.269-.659h-.089v-.011a.33.33 0 0 0-.141.308c0 .171.082.316.178.316a.14.14 0 0 0 .112-.073a.6.6 0 0 1-.034-.2a.5.5 0 0 1 .057-.248a.23.23 0 0 0-.083-.092m-3.572.498a.36.36 0 0 1 .291.155a.295.295 0 0 0-.581 0a.36.36 0 0 1 .29-.155m-.558-2.491v.134l.697-.195l.206-.046l.002-.005l-.852.028zm.97-1.156l.124.037l.077.042l-.174-.463l-1.465-.4l-.018-.152l1.421.39l-.386-1.022l-1.1.125l-.121-1.016l.368-.063l.224-.076l.023-.12l-1.409-.374l-.362.04l-.15.029v.057l.023.093l.765.275l.122 1.215l-.693.079l-.043.006l.766.21l.015.151l-.932-.255v.207a.14.14 0 0 0 .1.137l.865.26l.034.335l.092.03l.011.374l.334.1zm-.721-.218l-.636.087l-.034-.289zm-7.731-5.293l1.764-.051l-.214-.511l-1.674.057zm1.313-.467l.145.341l-1.192.034l-.084-.337zm-1.139 5.968v-.114l-.108-.129v.243zm3.209.504v-.264l-.23.02v.275zm-2.268.283v-.327l-.219.03v.323zm-.8-.95l.35.476l-.051-2.106v-1.357l-.596-.579l-.002 3.159l.284.387l.015.018zm-.21-3.665l.606.461l2.775-.118l-.786-.438Zm3.429 1.709v-1.113l-2.778.12v1.168zm-.523 2.249l.064-.006l.459-.044v-2.057l-2.776.175l.04 2.147l.379-.037l.08-.011v.003zM6.675 7.5H2.887l.059 3.359l3.729-.575zm-.192 2.679l-3.351.516l-.053-3.021l3.4-.007zM2 2.106v19.788h20V2.106Zm19.752 19.539H2.248V2.355h19.5Zm-5.789-3.043l.107.058h.449l-.065-.031zm2.189.245a.675.675 0 0 0-.627-.47h-.753l.031.27v.153h-.005a.6.6 0 0 1 .044.226v.06l.11.061a.5.5 0 0 0 .026-.162a.37.37 0 0 0-.117-.3h.666a.39.39 0 0 1 .362.272l.936 2.668q-.002.012.006.023h.285a.5.5 0 0 0-.025-.131zm-11.896.104a.44.44 0 0 1 .394-.269h4.737l1.016-.3H6.65a.72.72 0 0 0-.65.439l-1.166 2.66a.5.5 0 0 0-.038.164h.284l.01-.034zM18.152 9.4a3 3 0 0 0-.437-.172a.5.5 0 0 0-.145-.016V7.42L14 7.5v2.791l1.986.319a3.1 3.1 0 0 0-1.229.6a2 2 0 0 0-.126.112H10.65v-1.034h3.232V7.5H6.767v2.791h3.162v1.027H7.586l.058.137l-2.085.06l-.049-.2h-.852l-.729.459v.147h10.237l-.054.107H3.93v.215h.7v5.4l-.322.621h.644l.576-1.288l-.328-.018l-.045-4.723l8.867-.007a6.6 6.6 0 0 0-.165 2.93c0 .016.014.13.045.3l.57 1.512h-.1v.161l-.087.014l-.019.732l-.094.006l-.034.132l-.267.059l-2.555.714l-.032.39h.153l-.026-.138l2.517-.472l.278.105l-.52 1.227v.408l.194.027l.034-.247v-.007l.563-1.35l.385-.071l2.321 1.1l.074.159h.2l-.029-.391L15.5 18.47l.981.054l.215.105l-.04-.328l-1.926-.294l-.021-.12h-.081l-.023-.725l-.088-.03v-.106a2 2 0 0 0 .205.243a1.2 1.2 0 0 0 .339.246v.006L15.4 18l.633.1l-.378-.473v-.032a3.7 3.7 0 0 0 .725-.193a2.5 2.5 0 0 0 1-.467c.311-.321.25-.751.158-1.4a8.5 8.5 0 0 1-.111-1.606a5.8 5.8 0 0 1 .473-2.09q.062-.15.106-.275l.018.019c.058.047.139-.027.3-.034a.45.45 0 0 1 .356.115c-.009.045-.562-.122-.678.069c-.03.049-.031.125 0 .149s.131-.051.264-.092c.218-.066.458.017.46.069c0 .079-.532.052-.678.357c-.048.1-.053.23-.012.253s.118-.075.23-.173a1.05 1.05 0 0 1 .575-.3c.034.049-.66.475-.575.7a.19.19 0 0 0 .173.1a.27.27 0 0 0 .176-.11c-.051.084-.1.187-.061.248c.027.045.076.026.126.08c.078.084.036.2.053.255a.65.65 0 0 1-.474.12a3 3 0 0 0-.437-.171c-.146-.032-.193-.014-.219.01a.166.166 0 0 0 0 .22c.058.047.139-.027.3-.035a.46.46 0 0 1 .357.115c-.01.046-.563-.121-.679.069c-.03.05-.031.126 0 .15s.131-.051.265-.092c.217-.067.457.017.46.069c0 .079-.532.05-.679.356c-.048.1-.053.232-.011.253s.117-.074.23-.172a1.05 1.05 0 0 1 .575-.3c.034.049-.661.475-.575.7a.1.1 0 0 0 .022.037v1.91a4 4 0 0 1 .04.529a.27.27 0 0 0 .219.255a6.6 6.6 0 0 0 1.78.066a.31.31 0 0 0 .273-.3v-2.5a.32.32 0 0 0-.321-.32l-.148.023a1.2 1.2 0 0 0 .454-.713a.37.37 0 0 0 .255.1c.167-.014.273-.221.311-.2s-.105.2-.058.39c.043.176.23.3.288.266c.058-.035-.022-.178.069-.276c.05-.055.1-.036.126-.081c.037-.061-.01-.164-.061-.248a.27.27 0 0 0 .176.11a.19.19 0 0 0 .173-.1c.085-.227-.609-.653-.575-.7a1.05 1.05 0 0 1 .575.3c.112.1.188.194.23.173s.036-.154-.012-.253c-.146-.3-.682-.278-.678-.357c0-.052.242-.135.46-.07c.133.042.22.127.264.093s.03-.1 0-.15c-.116-.19-.669-.023-.678-.068a.45.45 0 0 1 .356-.115c.16.007.241.08.3.034a.164.164 0 0 0 0-.218c-.026-.026-.073-.044-.218-.012a3 3 0 0 0-.437.173a.7.7 0 0 1-.506-.138l-.138-.07c.152-.213.261-.483.17-.623c-.158-.243-.852.009-.886-.115c-.019-.073.2-.238.439-.273a.41.41 0 0 0 .311.158a.3.3 0 0 0 .15-.065a1 1 0 0 0 .111.055a.4.4 0 0 0-.008.206c.043.175.23.3.288.264s-.022-.178.069-.276c.05-.055.1-.035.126-.08c.037-.061-.01-.165-.061-.25a.26.26 0 0 0 .176.112a.19.19 0 0 0 .173-.1c.085-.226-.609-.653-.575-.7a1.07 1.07 0 0 1 .575.3c.112.1.188.194.23.172s.036-.154-.012-.253c-.146-.3-.682-.278-.678-.357c0-.052.242-.135.46-.07c.133.042.22.128.264.093s.03-.1 0-.15c-.116-.19-.669-.023-.678-.068a.45.45 0 0 1 .352-.111c.16.007.241.08.3.034a.164.164 0 0 0 0-.218c-.026-.026-.073-.043-.218-.012a3 3 0 0 0-.437.173a.7.7 0 0 1-.506-.138a6 6 0 0 0-.472-.22a.3.3 0 0 0-.022-.228c-.158-.243-.852.009-.885-.115c-.022-.077.226-.26.482-.278a1 1 0 0 1 .116 0c.272.026.4.19.46.149c.045-.031.05-.175-.023-.253c-.217-.226-1.1.148-1.518.368a.7.7 0 0 1-.508.138m-11.178.667v-2.4h6.685v2.4ZM8 11.693l.265-.253h3.191l.242.253zm4.693 0c-.052.114-.366.131-.449 0a.2.2 0 0 1-.011-.182a.2.2 0 0 1 .044-.063a.04.04 0 0 1 .017-.008l.047-.006l.093.1l.04-.021l-.077-.083l.062-.01h.007a.26.26 0 0 1 .158.078c.043.04.094.132.066.195zm6 .879l.007-.011zm2.317.819L21 13.38zm0-2.372l-.01-.011zm-3.44-1.55a1 1 0 0 1 .226-.048a.45.45 0 0 1 .356.115c-.008.038-.385-.069-.582 0zm0 .27a1 1 0 0 1 .168-.076c.218-.067.458.017.46.069c0 .071-.437.056-.628.28zm-3.382.426V7.672l3.191-.072v2.972a2 2 0 0 0-.233-.045a3 3 0 0 0-.356-.022a3 3 0 0 0-.349.019zm-.072 4.845l-.018-.216h.074l.075-.01a.7.7 0 0 1 .238-.005l.054.01l.013.172c0 .013.01.11.032.257l-.439.024a4 4 0 0 1-.029-.232m.405 1.484l-.063-.134l.426-.083q.031.065.065.128zm1.153-.24l-.552.115a2 2 0 0 1-.074-.125l.08-.015l.552-.108l1.283-.252a1 1 0 0 1-.034.124zm.874.184q-.126.074-.314.156a1.3 1.3 0 0 1-.528.159h-.039a.6.6 0 0 1-.208-.054l.209-.05zm-1.823-1.231l-.006-.035l.1.01h.255zm1.921.385a.9.9 0 0 0 .033-.327a.7.7 0 0 1-.1.309l-.4-.109a.6.6 0 0 0 .269-.2a.6.6 0 0 0 .093-.317l.045-.014l.061-.021l.051-.02q.074-.028.136-.055l.089-.038l.01.1l.014.139a4.4 4.4 0 0 1 .037.643zm.247-1.647l-.048.015l-.159.048l-.095.027l-.024.007l-.069.017a4 4 0 0 1 .143-.693c.062-.22.1-.365.031-.508a.44.44 0 0 0-.331-.223a1 1 0 0 0-.113-.01a.94.94 0 0 0-.505.163a1 1 0 0 0-.213.186a1.83 1.83 0 0 0-.354 1.118v.175h-.133v-.072a3.2 3.2 0 0 1 .159-1.312a1.4 1.4 0 0 1 .227-.378a1.1 1.1 0 0 1 .962-.386a.6.6 0 0 1 .27.108a.5.5 0 0 1 .164.19a.5.5 0 0 1 .054.23c.059-.2.076-.3.018-.4a.44.44 0 0 0-.236-.183a1 1 0 0 0-.14-.038h-.021a1 1 0 0 0-.139-.01a1 1 0 0 0-.152.01a1.29 1.29 0 0 0-1 .707a3 3 0 0 0-.214 1.468v.073h-.321v-.068a3.9 3.9 0 0 1 .326-1.983a2 2 0 0 1 .128-.2q.041-.055.085-.107l.013-.014a1.66 1.66 0 0 1 .64-.443a1.4 1.4 0 0 1 .715-.09a.79.79 0 0 1 .6.4a1.08 1.08 0 0 1-.032.838A5 5 0 0 0 16.9 13.9zm.317 2.73a1.9 1.9 0 0 1-.85.471a2.4 2.4 0 0 1-.7.189h-.06a.94.94 0 0 1-.414-.092a1 1 0 0 1-.283-.2a1 1 0 0 1-.075-.079l-.077-.094l.365-.087l.087-.02a.7.7 0 0 0 .168.127a.57.57 0 0 0 .294.06a1.8 1.8 0 0 0 .559-.165a1.6 1.6 0 0 0 .664-.374l.042-.059l.43-.1V15.9l-.32.067v-.116l.33-.065l-.336-.091q-.015-.194-.044-.435c-.026-.221-.059-.5-.072-.807v-.027a.23.23 0 0 1 .058-.1a.24.24 0 0 1 .274-.074l.057.017v.051a9 9 0 0 0 .082.931c.084.614.139 1.049-.179 1.424m.444-4.381a5.3 5.3 0 0 0-.324 1.434v.04l-.036.018a3 3 0 0 1-.273.115l-.1.037v-.107a5.7 5.7 0 0 1 .318-1.588c.116-.353.18-.547.071-.733a.77.77 0 0 0-.563-.325a1.5 1.5 0 0 0-.236-.018a1.96 1.96 0 0 0-.879.215a2 2 0 0 0-.479.345a2 2 0 0 0-.169.194a2 2 0 0 0-.074.107a2 2 0 0 0-.114.2A4.1 4.1 0 0 0 14.5 14.2v.077h-.077a5 5 0 0 1-.306-.023l-.061-.006v-.061a4.55 4.55 0 0 1 .265-1.954q.042-.102.1-.2q.029-.054.06-.107a2.2 2.2 0 0 1 .393-.486q.067-.063.141-.12a2.55 2.55 0 0 1 1.824-.521a1.16 1.16 0 0 1 .866.479c.195.313.086.622-.051 1.016m1.446 2.511h-.15V14.7a.4.4 0 0 0 .15-.074zm.186-.485v-.038a.32.32 0 0 0-.184-.211a2 2 0 0 1-.15-.091a.14.14 0 0 1-.068-.112a.2.2 0 0 1 .068-.122a.4.4 0 0 1 .15-.09a.3.3 0 0 1 .207-.007c.216.092.12.546.239.642q-.127.016-.266.029zm-.3-1.679c.02-.013.06.04.119.094a.4.4 0 0 0 .143.092a2 2 0 0 0 .11.166q-.131.05-.253.1l-.115.053a.4.4 0 0 0 .054-.118c.038-.186-.103-.362-.067-.387zM20 13.23a.3.3 0 0 0 0 .068c-.255-.079-.73.074-.758-.028c-.012-.044.064-.123.18-.186c.107.117.219.191.289.169s.086-.134.1-.261h.029a.8.8 0 0 1 .265.077a.25.25 0 0 0-.105.161m-.02-.63c.158-.068.42.086.425.218c0 .052-.036.091-.089.127a.2.2 0 0 0-.035-.053c-.079-.082-.246-.085-.446-.045a.3.3 0 0 1 .145-.247m-.08-.344c-.092 0-.219-.023-.343-.029c-.118-.077-.261-.128-.258-.228l.006-.029a1 1 0 0 1 .134-.026a1 1 0 0 1 .116 0a.8.8 0 0 1 .317.1c.012.069.018.144.028.21zm-.175-.475a.22.22 0 0 1 .112.126a3 3 0 0 0-.356-.1a.3.3 0 0 1 .244-.028zM20 9.764q.046.05.039.082c-.006.021-.044.036-.1.037A1 1 0 0 0 20 9.764m-1.052-.087v-.095h.15v.107q.036-.02.084-.044l.019.006a.27.27 0 0 1 .137.21a.26.26 0 0 0-.184.1a.3.3 0 0 0-.023.22l-.033-.034a1 1 0 0 0-.15-.1c-.092-.053-.175-.1-.172-.177s.076-.147.17-.193zm0 .981a.5.5 0 0 0 .15-.134a.37.37 0 0 0 .081-.194c.122.287.4.594.538.552c.159-.05.035-.558.265-.656c.158-.067.42.086.425.218c.007.161-.37.195-.4.415a.3.3 0 0 0 .036.17a5.3 5.3 0 0 0-.855.359l-.088.047a1 1 0 0 1-.15.069a.44.44 0 0 1-.268.022a3 3 0 0 0-.437-.173a.4.4 0 0 0-.17-.013a.48.48 0 0 0-.068-.4a.9.9 0 0 0-.433-.306v-.313c.042-.031.1-.092.168-.153a1.05 1.05 0 0 1 .575-.3c.034.049-.66.475-.575.7a.19.19 0 0 0 .173.1a.27.27 0 0 0 .176-.11c-.051.084-.1.187-.061.248c.027.045.076.026.126.081c.092.1.016.246.069.276s.245-.09.288-.265c.047-.191-.094-.367-.057-.391s.143.182.31.2a.3.3 0 0 0 .18-.049zm-.771-.225l-.007.012zm.643-4.278h-.35l-.34-.625c.212-.343.282-.76.131-.886c-.191-.161-.757.126-1.048.541c-.205.291-.362.771-.193.92s.656-.057.934-.347l.054-.06l.427.457h-1.959l-.325-.582l-.044-.557a1.162 1.162 0 1 0-.776-.008l-.077.511l-.468.636H13.32V4.883h-.864v1.272h-.975v.621h7.339zm-2.784-2.024h-.575l-.083.558a.851.851 0 1 1 .7 0zM9 4.529H6.76l.214-.329v-.836l-.3-.46h-.7l-.383.5v.82l.294.306h-.744V2.506h-.506v2.023h-.169V2.651h-.222v1.878h-.222V2.973h-.284v1.556H3.6V2.805h-.268v1.724h-.138V2.613h-.207v1.916H2.8V3.2h-.387v1.329h-.165v1.044H9Zm-.355.69H2.413v-.336h6.232z"
            ></path></svg
          >
          <div class="w-full text-2xl font-semibold">
            Study room/Office
          </div>
        </div>
      </label>
    </li>
    <li>
      <input
        type="checkbox"
        id="living-room-option"
        value="living_room"
        name="task_areas"
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
  <label
    class="block tracking-wide text-gray-700 text-base font-bold mb-2"
  >
    Which of the following items are included in the deep cleaning
    service?
  </label>
  <ul class="grid w-full gap-2 md:gap-10 md:grid-cols-3 mt-4">
    <li class="h-full">
      <input
        type="checkbox"
        id="oven-option"
        value="oven"
        name="deep_cleaning_options"
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
        value="fridge"
        name="deep_cleaning_options"
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
        value="washing_machine"
        name="deep_cleaning_options"
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
  <label
    class="block tracking-wide text-gray-700 text-base font-bold mb-2"
  >
    Would you like any of the following additional cleanings?
  </label>
  <ul class="grid w-full gap-2 md:gap-10 md:grid-cols-3 mt-4">
    <li class="h-full">
      <input
        input-option-checked="window-section"
        type="checkbox"
        id="window-option"
        value="window"
        name="additional_cleanings"
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
        value="mattresses"
        name="additional_cleanings"
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
        value="curtains"
        name="additional_cleanings"
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
      Which sides of the windows should we clean? <span
        class="text-red-500">*</span
      >
    </label>
    <div class="grid grid-cols-3 gap-5">
      <div class="flex items-center ps-4 border border-gray-200 rounded">
        <input
          id="sides-to-clean-radio-1"
          type="radio"
          value="outside"
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
          value="inside"
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
          value="inside and outside"
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
      >How many single mattresses? <span class="text-red-500">*</span
      ></label
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
      >How many double mattresses? <span class="text-red-500">*</span
      ></label
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
      >How many king size mattresses? <span class="text-red-500">*</span
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
    <label
      for="half_length-count"
      class="font-semibold text-lg text-muted"
      >How many pairs of half length curtains? <span class="text-red-500"
        >*</span
      ></label
    >
    <div
      class="h-10 w-28 bg-gray-50 flex border border-gray-200 rounded items-center mt-1"
    >
      <button
        type="button"
        id="decrement-button-half_length-count"
        data-input-counter="quantity-half_length-count"
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
        name="half_length_count"
        maxlength="1"
        type="text"
        id="quantity-half_length-count"
        class="px-2 text-center appearance-none outline-none text-gray-800 w-full bg-transparent"
        value="0"
        oninput="this.value = this.value.replace(/[^0-9]/g, '');"
        disabled
      />
      <button
        type="button"
        id="increment-button-half_length-count"
        data-input-counter="quantity-half_length-count"
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
      for="full_length-count"
      class="font-semibold text-lg text-muted"
      >How many pairs of full length curtains? <span class="text-red-500"
        >*</span
      ></label
    >
    <div
      class="h-10 w-28 bg-gray-50 flex border border-gray-200 rounded items-center mt-1"
    >
      <button
        type="button"
        id="decrement-button-full_length-count"
        data-input-counter="quantity-full_length-count"
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
        name="full_length_count"
        maxlength="1"
        type="text"
        id="quantity-full_length-count"
        class="px-2 text-center appearance-none outline-none text-gray-800 w-full bg-transparent"
        value="0"
        oninput="this.value = this.value.replace(/[^0-9]/g, '');"
        disabled
      />
      <button
        type="button"
        id="increment-button-full_length-count"
        data-input-counter="quantity-full_length-count"
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
<div class="flex-row w-full px-2 md:px-16 mb-6 md:mb-5">
  <label
    class="block tracking-wide text-gray-700 text-base font-bold mb-2"
  >
    The majority of our clients booking end of tenancy cleaning also tend
    to include:
  </label>
  <ul class="grid w-full gap-2 md:gap-10 md:grid-cols-3 mt-4">
    <li class="h-full">
      <input
        type="checkbox"
        id="balcony_cleaning-option"
        value="balcony_cleaning"
        name="additional_cleanings_2"
        class="hidden peer"
      />
      <label
        for="balcony_cleaning-option"
        class="inline-flex h-44 items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-[#494f8c] peer-checked:bg-[#494f8c] hover:text-gray-600 peer-checked:text-white hover:bg-gray-50"
      >
        <div class="block">
          <svg
            class="mb-2 w-20 h-20"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            ><path
              fill="currentColor"
              d="M24 12.278c-.595.347-1 .984-1 1.722a1.99 1.99 0 0 0 1 1.721v4.303c-.083-.005-.162-.024-.246-.024H20v-4.279A1.99 1.99 0 0 0 21 14c0-.738-.405-1.375-1-1.722V8h4zM8 20.024v-4.303A1.99 1.99 0 0 0 9 14c0-.738-.405-1.375-1-1.722V8h4v4.278c-.595.347-1 .984-1 1.722a1.99 1.99 0 0 0 1 1.721V20H8.246c-.084 0-.163.019-.246.024m10-7.746c-.595.347-1 .984-1 1.722a1.99 1.99 0 0 0 1 1.721V20h-4v-4.279A1.99 1.99 0 0 0 15 14c0-.738-.405-1.375-1-1.722V8h4zM29 6H3c-.55 0-1 .45-1 1c0 .549.45 1 1 1h3v4.278c-.595.347-1 .984-1 1.722a1.99 1.99 0 0 0 1 1.721v4.934a4.23 4.23 0 0 0-2 3.591C4 25.215 4.785 26 5.754 26h20.492c.969 0 1.754-.785 1.754-1.754c0-1.518-.803-2.84-2-3.591v-4.934A1.99 1.99 0 0 0 27 14c0-.738-.405-1.375-1-1.722V8h3c.55 0 1-.451 1-1c0-.55-.45-1-1-1"
            ></path></svg
          >

          <div class="w-full text-2xl font-semibold">
            Balcony Cleaning
          </div>
        </div>
      </label>
    </li>
    <li>
      <input
        type="checkbox"
        id="garage_cleaning-option"
        value="garage_cleaning"
        name="additional_cleanings_2"
        class="hidden peer"
      />
      <label
        for="garage_cleaning-option"
        class="inline-flex h-44 items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-[#494f8c] peer-checked:bg-[#494f8c] hover:text-gray-600 peer-checked:text-white hover:bg-gray-50"
      >
        <div class="block">
          <svg
            class="mb-2 w-20 h-20"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            ><path
              fill="currentColor"
              d="m16.936 17.845l-.013.121a3 3 0 0 0-.012.212v.091h.06l.036-.066a.25.25 0 0 0 .04-.115c0-.026.012-.124.022-.219s.016-.17.014-.17q-.005.002-.014.017a1 1 0 0 1-.069.071zm-.895.006a.2.2 0 0 0-.054-.056a1 1 0 0 1-.074-.076q-.02-.03-.022-.027l.022.224l.023.216l.036.068l.036.069h.058v-.1a3 3 0 0 0-.025-.318m1.064-.803h-.2v.734l.024-.019a.33.33 0 0 0 .128-.2c.016-.095.05-.458.046-.482zm-.974.002v1.155c0 1.267 0 1.191.039 1.235s.044.046.317.046a3 3 0 0 0 .269-.007a.15.15 0 0 0 .083-.072a11 11 0 0 0 .012-1.194v-1.168h-.356c-.195 0-.362.002-.364.005m-.12.681a.3.3 0 0 0 .051.044v-.73h-.19v.024c-.005.024.036.445.05.508a.3.3 0 0 0 .089.154m1.145-.744a.6.6 0 0 0 .011-.121a.4.4 0 0 0-.1-.009a.2.2 0 0 0 .023.033l.043.065zm-1.349-.126v.052c.007.083.007.083.039.03l.045-.068l.017-.021h-.071Zm-2.766-1.164a.267.267 0 0 1-.267.267a.267.267 0 0 1-.267-.267a.267.267 0 0 1 .267-.267a.267.267 0 0 1 .267.267m4.036 1.29l-.008-.015l-.037-.052a.6.6 0 0 0-.392-.2a1.3 1.3 0 0 0-.3 0a.63.63 0 0 0-.341.151a.5.5 0 0 0-.09.114s.248.006.586.006zm.152-.188a.4.4 0 0 0 .014-.088c.009-.077.009-.083 0-.107a.3.3 0 0 0-.041-.056a.12.12 0 0 0-.061-.041a.4.4 0 0 0-.119-.017l-.013.119c-.013.125-.015.166-.007.171a1.4 1.4 0 0 0 .227.019m-1.255-.169a1 1 0 0 0-.019-.14a.4.4 0 0 0-.07.007c-.063.011-.067.013-.094.04a.4.4 0 0 0-.047.057l-.019.029l.007.081a.5.5 0 0 0 .016.091c.007.01.015.01.115 0a.5.5 0 0 0 .116-.02c.007-.007.006-.032-.005-.145m1.52.947a2.3 2.3 0 0 0 .06-.484a1.13 1.13 0 0 0-.157-.6l-.038-.056l-.012-.014l-.046.046l-.045.046l.015.023a.6.6 0 0 1 .1.264a2.7 2.7 0 0 1-.01.64a3 3 0 0 1-.411 1l-.035.059v.122l.017-.022a2.8 2.8 0 0 0 .562-1.024M15.7 16.545l.02-.029l-.032-.037c-.058-.066-.053-.065-.086-.021a1 1 0 0 0-.166.46a1.3 1.3 0 0 0-.008.229a1.95 1.95 0 0 0 .34 1.058a4 4 0 0 0 .294.4a.2.2 0 0 0 0-.061a.17.17 0 0 0-.036-.117a3 3 0 0 1-.406-.988a2.7 2.7 0 0 1-.015-.609a.7.7 0 0 1 .095-.285m2.157-.429a1 1 0 0 0-.172.057l-.166.062l-.064.069l-.065.068l.037.049a1 1 0 0 1 .149.331a1.2 1.2 0 0 1 .038.354a2 2 0 0 1-.041.408a2.7 2.7 0 0 1-.6 1.119l-.065.082v.294l.078-.079a5.3 5.3 0 0 0 .762-1.072a1.2 1.2 0 0 0 .141-.446a4 4 0 0 0 .04-.545c0-.219-.006-.518-.018-.609a.4.4 0 0 0-.054-.142m-1.846 2.531a4 4 0 0 1-.351-.5a1.94 1.94 0 0 1-.3-1a1.5 1.5 0 0 1 .007-.231a1.05 1.05 0 0 1 .18-.492a.4.4 0 0 0 .034-.049a1 1 0 0 0-.06-.068l-.061-.066l-.138-.054l-.171-.064l-.03-.012l-.03.059a.3.3 0 0 0-.035.135c-.01.108-.016.482-.011.663a2.6 2.6 0 0 0 .1.71a5 5 0 0 0 .691 1.087c.061.073.221.245.228.245s0-.242 0-.291zm1.489-2.468c.013-.006.091-.037.175-.067a1 1 0 0 0 .151-.063c0-.019-.029-.05-.079-.085l-.054-.039l-.024.026a.4.4 0 0 1-.044.037c-.01.006-.122.043-.248.081l-.553.17c-.178.054-.327.1-.331.1l-.11-.031l-.533-.163a18 18 0 0 1-.465-.146a.2.2 0 0 1-.064-.042l-.03-.03l-.056.04c-.051.036-.071.06-.073.083a1 1 0 0 0 .166.069a.52.52 0 0 1 .316.217l.111.12c.01.011.012.011.048 0a1.4 1.4 0 0 1 .255-.041c.122-.011.757-.011.873 0a1.3 1.3 0 0 1 .249.04l.037.012l.132-.137a2 2 0 0 1 .151-.151m.491-.172a2 2 0 0 0-.109-.093a1 1 0 0 0-.149-.105s-.009.012-.013.027s-.006.028.011.04l.09.068c.041.03.095.074.121.1c.044.041.046.044.042.065a.06.06 0 0 0 .033.069a.055.055 0 0 0 .07-.015a.06.06 0 0 0-.025-.094a.4.4 0 0 1-.071-.062m-2.726-.142l-.009-.028a.1.1 0 0 0-.014-.028l-.08.055a1.5 1.5 0 0 0-.215.182a.04.04 0 0 1-.026.018c-.021 0-.043.029-.043.057a.057.057 0 1 0 .114 0c0-.028 0-.031.036-.067a2 2 0 0 1 .211-.167zm2.498-.169a.1.1 0 0 0-.007.049l.067.048a2 2 0 0 1 .111.08a.9.9 0 0 0 .282.134a.25.25 0 0 0 .053-.125c0-.009-.476-.231-.492-.232a.1.1 0 0 0-.014.046m-2.71.17c.048-.036.152-.11.174-.124v-.02c0-.01-.01-.03-.014-.045a.1.1 0 0 0-.011-.027l-.231.105c-.268.123-.261.119-.26.138a.4.4 0 0 0 .056.116a.4.4 0 0 0 .118-.044a.8.8 0 0 0 .168-.099m3.294-1.117A1.2 1.2 0 0 0 18 14.72a.33.33 0 0 0-.157.087a.6.6 0 0 1-.109.073l-.051.024v.163l.048.02l.088.037a.6.6 0 0 0 .315.025a.7.7 0 0 0 .234-.062a.3.3 0 0 0 .126-.231c.006-.076-.007-.082-.147-.107m-3.181.375l.088-.037l.048-.02v-.163l-.053-.027a.6.6 0 0 1-.107-.073a1 1 0 0 0-.086-.061a.4.4 0 0 0-.207-.025a2 2 0 0 0-.323.056c-.029.012-.036.029-.032.082a.3.3 0 0 0 .126.231a.7.7 0 0 0 .237.063a.6.6 0 0 0 .309-.026m.1.454c-.008.032-.006.04.013.109c.046.167.057.2.083.223s-.03.01.616.208l.511.156l.366-.112l.538-.166c.1-.029.182-.057.192-.062a.15.15 0 0 0 .063-.075c0-.012.02-.067.037-.123c.043-.147.039-.179-.039-.282a1 1 0 0 0-.089-.092q-.086-.073-.086-.129a.2.2 0 0 1 .109-.147a.1.1 0 0 0 .032-.033a.4.4 0 0 0 0-.14c-.009-.064-.016-.086-.034-.1a2 2 0 0 0-.2-.11l-.449.13l-.445.13l-.446-.13l-.45-.13l-.1.053a.4.4 0 0 0-.106.071a.55.55 0 0 0-.02.235a.2.2 0 0 0 .044.036a.16.16 0 0 1 .085.183a1 1 0 0 1-.091.1a.4.4 0 0 0-.134.197m1.4.351a.32.32 0 0 1 .121-.189a1.4 1.4 0 0 1 .478-.2c.162-.04.172-.04.186-.019s0 .027-.048.142a1 1 0 0 1-.083.163a.4.4 0 0 1-.109.1c-.029.015-.4.151-.426.154a.124.124 0 0 1-.123-.088a.1.1 0 0 1 .003-.063zm-1.129-.412c.009-.009.014-.009.07 0a1.7 1.7 0 0 1 .571.209a.3.3 0 0 1 .109.123a.23.23 0 0 1 .033.142a.124.124 0 0 1-.123.088a4 4 0 0 1-.432-.159c-.081-.048-.116-.094-.183-.247c-.055-.121-.06-.142-.046-.156zm.357-.744l.294.086l.194.057l.108.03l.545-.159l.273-.08l.126-.039l-.123-.079a2.3 2.3 0 0 0-.317-.151a2 2 0 0 0-.307-.079a1.3 1.3 0 0 0-.291-.017a1.8 1.8 0 0 0-.591.173c-.042.022-.1.051-.124.067l-.142.084l.129.041c.014.004.115.035.226.066m-.044-.168a1.7 1.7 0 0 1 .561-.163a1 1 0 0 1 .258.016a2 2 0 0 1 .291.074a3 3 0 0 1 .23.1l-.184.054l-.517.151l-.081-.022l-.192-.057l-.3-.086l-.136-.039zm-9.727.912a.241.241 0 1 0 .24.241a.24.24 0 0 0-.24-.241m6.086.013a.241.241 0 1 0 .241.241a.24.24 0 0 0-.241-.241m.852-.543a2.5 2.5 0 0 1-.357-.435c0-.029.13-.052.288-.052c.317 0 .45-.168.288-.361a.67.67 0 0 0-.694-.132c-.087.073-.136.011-.331-.329a3.7 3.7 0 0 0-.53-.689a17.3 17.3 0 0 0-4.989-.075a1.9 1.9 0 0 0-.794.793c-.174.342-.218.38-.358.3a.68.68 0 0 0-.671.115c-.155.228-.065.376.224.376c.155 0 .286.022.286.048a2.3 2.3 0 0 1-.275.389c-.486.6-.492.628-.528 2.363a18 18 0 0 0 .016 1.824a.48.48 0 0 0 .235.288a2.3 2.3 0 0 0 .7.052c.581-.027.747-.155.747-.568c0-.234 0-.235.389-.175a46 46 0 0 0 4.7 0l.465-.063l.025.31c.032.384.253.516.869.516c.352 0 .47-.036.634-.2c.2-.2.2-.229.2-1.528a15 15 0 0 0-.093-1.858a1.38 1.38 0 0 0-.446-.909m-6.583-1.4c.176-.278.305-.519.506-.566a29 29 0 0 1 4.411.06a2.5 2.5 0 0 1 .572.945a15 15 0 0 1-2.867.201a15.6 15.6 0 0 1-2.865-.2a2.2 2.2 0 0 1 .243-.44m2.628 3.253H7.221l-.021-.059h3.805l-.019.054zm1.856.052a.13.13 0 0 1-.109.051h-3.5a.13.13 0 0 1-.108-.051h3.715Zm-1.856-.158H7.183l-.02-.057h3.882l-.02.057zm0-.109H7.145l-.021-.06h3.961l-.021.06zm0-.112h-2l-.014-.042v-.012h4.03v.012l-.015.042zm0-.575h1.727l.034.054H7.345l.034-.054zm-1.687-.052a.13.13 0 0 1 .107-.045h3.165a.14.14 0 0 1 .107.045H7.415Zm1.687.158H10.9l.032.051H7.281l.031-.051zm0 .1h1.854l.034.054h-3.78l.034-.054zm0 .106h1.925l.03.048h-3.91l.031-.048zm0 .1h1.984l.017.026l.009.027H7.092a.1.1 0 0 1 .01-.027l.016-.026zm-3.039-.311c-.734-.023-.83-.059-.83-.3c0-.362.112-.41.681-.3a3.3 3.3 0 0 1 .706.207l.582.128l-.173.183a2.2 2.2 0 0 1-.97.081zm.31 2.346c.01 0 .39-.222.681-.393a1.6 1.6 0 0 1 .793-.2l2.506-.016a1.6 1.6 0 0 1 .865.228l.575.382c-1.809.071-3.62.07-5.424.001zm5.921-2.342a2.2 2.2 0 0 1-.965-.088l-.173-.183l.582-.129a3.3 3.3 0 0 1 .706-.206c.569-.108.681-.06.681.3c-.004.25-.101.281-.835.305zm-6.473-.359a.267.267 0 0 1-.267.267a.267.267 0 0 1-.267-.267a.267.267 0 0 1 .267-.267a.267.267 0 0 1 .267.267m15.338-7.402H22l-9.849-4.561L2 8.282h1.058zm-2.668 1.52h1.516v9.714h-1.516zm1.803-.33v10.044h.865V8.282H3.058v11.234h.865V9.472Z"
            ></path></svg
          >
          <div class="w-full text-2xl font-semibold">Garage Cleaning</div>
        </div>
      </label>
    </li>
  </ul>
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
  'Antiviral Sanitisation': `<div class="flex-row w-full px-2 md:px-16 mb-6 md:mb-5">
  <label
    class="block tracking-wide text-gray-700 text-base font-bold mb-2"
  >
    Choose your property type: <span class="text-red-500">*</span>
  </label>
  <ul class="grid w-full gap-2 md:gap-10 md:grid-cols-3 mt-4">
    <li class="h-full">
      <input
        input-radio-checked
        type="radio"
        id="studio-option"
        name="place"
        value="studio"
        class="hidden peer"
        required
      />
      <label
        for="studio-option"
        class="inline-flex h-44 items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-[#494f8c] peer-checked:bg-[#494f8c] hover:text-gray-600 peer-checked:text-white hover:bg-gray-50"
      >
        <div class="block">
          <svg
            class="mb-2 w-20 h-20"
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 64 64"
            enable-background="new 0 0 64 64"
            xml:space="preserve"
          >
            <g>
              <g>
                <path
                  fill="#B4CCB9"
                  d="M2,15v46c0,1.104,0.896,2,2,2h12V13H4C2.896,13,2,13.896,2,15z"
                ></path>
                <path
                  fill="#B4CCB9"
                  d="M44,3H20c-1.104,0-2,0.896-2,2v58l0.001,0.002H27V54c0-0.553,0.447-1,1-1h8c0.553,0,1,0.447,1,1v9.002
             h8.999L46,63V5C46,3.896,45.104,3,44,3z"
                ></path>
                <path
                  fill="#B4CCB9"
                  d="M60,23H48v40h12c1.104,0,2-0.896,2-2V25C62,23.896,61.104,23,60,23z"
                ></path>
              </g>
              <path
                fill="#394240"
                d="M60,21H48V5c0-2.211-1.789-4-4-4H20c-2.211,0-4,1.789-4,4v6H4c-2.211,0-4,1.789-4,4v46c0,2.211,1.789,4,4,4
           h56c2.211,0,4-1.789,4-4V25C64,22.789,62.211,21,60,21z M16,63H4c-1.104,0-2-0.896-2-2V15c0-1.104,0.896-2,2-2h12V63z M35,63.002
           h-6V55h6V63.002z M46,63l-0.001,0.002H37V54c0-0.553-0.447-1-1-1h-8c-0.553,0-1,0.447-1,1v9.002h-8.999L18,63V5
           c0-1.104,0.896-2,2-2h24c1.104,0,2,0.896,2,2V63z M62,61c0,1.104-0.896,2-2,2H48V23h12c1.104,0,2,0.896,2,2V61z"
              ></path>
              <path
                fill="#394240"
                d="M7,25h4c0.553,0,1-0.447,1-1v-4c0-0.553-0.447-1-1-1H7c-0.553,0-1,0.447-1,1v4C6,24.553,6.447,25,7,25z
            M8,21h2v2H8V21z"
              ></path>
              <path
                fill="#394240"
                d="M7,35h4c0.553,0,1-0.447,1-1v-4c0-0.553-0.447-1-1-1H7c-0.553,0-1,0.447-1,1v4C6,34.553,6.447,35,7,35z
            M8,31h2v2H8V31z"
              ></path>
              <path
                fill="#394240"
                d="M7,45h4c0.553,0,1-0.447,1-1v-4c0-0.553-0.447-1-1-1H7c-0.553,0-1,0.447-1,1v4C6,44.553,6.447,45,7,45z
            M8,41h2v2H8V41z"
              ></path>
              <path
                fill="#394240"
                d="M29,19h-4c-0.553,0-1,0.447-1,1v4c0,0.553,0.447,1,1,1h4c0.553,0,1-0.447,1-1v-4C30,19.447,29.553,19,29,19
           z M28,23h-2v-2h2V23z"
              ></path>
              <path
                fill="#394240"
                d="M29,29h-4c-0.553,0-1,0.447-1,1v4c0,0.553,0.447,1,1,1h4c0.553,0,1-0.447,1-1v-4C30,29.447,29.553,29,29,29
           z M28,33h-2v-2h2V33z"
              ></path>
              <path
                fill="#394240"
                d="M29,39h-4c-0.553,0-1,0.447-1,1v4c0,0.553,0.447,1,1,1h4c0.553,0,1-0.447,1-1v-4C30,39.447,29.553,39,29,39
           z M28,43h-2v-2h2V43z"
              ></path>
              <path
                fill="#394240"
                d="M39,19h-4c-0.553,0-1,0.447-1,1v4c0,0.553,0.447,1,1,1h4c0.553,0,1-0.447,1-1v-4C40,19.447,39.553,19,39,19
           z M38,23h-2v-2h2V23z"
              ></path>
              <path
                fill="#394240"
                d="M29,9h-4c-0.553,0-1,0.447-1,1v4c0,0.553,0.447,1,1,1h4c0.553,0,1-0.447,1-1v-4C30,9.447,29.553,9,29,9z
            M28,13h-2v-2h2V13z"
              ></path>
              <path
                fill="#394240"
                d="M39,9h-4c-0.553,0-1,0.447-1,1v4c0,0.553,0.447,1,1,1h4c0.553,0,1-0.447,1-1v-4C40,9.447,39.553,9,39,9z
            M38,13h-2v-2h2V13z"
              ></path>
              <path
                fill="#394240"
                d="M39,29h-4c-0.553,0-1,0.447-1,1v4c0,0.553,0.447,1,1,1h4c0.553,0,1-0.447,1-1v-4C40,29.447,39.553,29,39,29
           z M38,33h-2v-2h2V33z"
              ></path>
              <path
                fill="#394240"
                d="M39,39h-4c-0.553,0-1,0.447-1,1v4c0,0.553,0.447,1,1,1h4c0.553,0,1-0.447,1-1v-4C40,39.447,39.553,39,39,39
           z M38,43h-2v-2h2V43z"
              ></path>
              <path
                fill="#394240"
                d="M57,29h-4c-0.553,0-1,0.447-1,1v4c0,0.553,0.447,1,1,1h4c0.553,0,1-0.447,1-1v-4C58,29.447,57.553,29,57,29
           z M56,33h-2v-2h2V33z"
              ></path>
              <path
                fill="#394240"
                d="M57,39h-4c-0.553,0-1,0.447-1,1v4c0,0.553,0.447,1,1,1h4c0.553,0,1-0.447,1-1v-4C58,39.447,57.553,39,57,39
           z M56,43h-2v-2h2V43z"
              ></path>
              <path
                fill="#394240"
                d="M57,49h-4c-0.553,0-1,0.447-1,1v4c0,0.553,0.447,1,1,1h4c0.553,0,1-0.447,1-1v-4C58,49.447,57.553,49,57,49
           z M56,53h-2v-2h2V53z"
              ></path>
              <path
                fill="#394240"
                d="M7,55h4c0.553,0,1-0.447,1-1v-4c0-0.553-0.447-1-1-1H7c-0.553,0-1,0.447-1,1v4C6,54.553,6.447,55,7,55z
            M8,51h2v2H8V51z"
              ></path>
              <g opacity="0.15">
                <path
                  d="M2,15v46c0,1.104,0.896,2,2,2h12V13H4C2.896,13,2,13.896,2,15z"
                ></path>
                <path
                  d="M60,23H48v40h12c1.104,0,2-0.896,2-2V25C62,23.896,61.104,23,60,23z"
                ></path>
              </g>
              <rect x="29" y="55" fill="#F76D57" width="6" height="8.002"
              ></rect>
              <g>
                <rect
                  x="8"
                  y="21"
                  fill="#F9EBB2"
                  width="2.001"
                  height="2.002"></rect>
                <rect
                  x="8"
                  y="31"
                  fill="#F9EBB2"
                  width="2.001"
                  height="2.002"></rect>
                <rect
                  x="8"
                  y="41"
                  fill="#F9EBB2"
                  width="2.001"
                  height="2.002"></rect>
                <rect
                  x="8"
                  y="51"
                  fill="#506C7F"
                  width="2.001"
                  height="2.002"></rect>
                <rect
                  x="26"
                  y="11"
                  fill="#506C7F"
                  width="2.001"
                  height="2.002"></rect>
                <rect
                  x="26"
                  y="21"
                  fill="#F9EBB2"
                  width="2.001"
                  height="2.002"></rect>
                <rect
                  x="26"
                  y="31"
                  fill="#F9EBB2"
                  width="2.001"
                  height="2.002"></rect>
                <rect
                  x="26"
                  y="41"
                  fill="#F9EBB2"
                  width="2.001"
                  height="2.002"></rect>
                <rect
                  x="36"
                  y="11"
                  fill="#F9EBB2"
                  width="2.001"
                  height="2.002"></rect>
                <rect
                  x="36"
                  y="21"
                  fill="#F9EBB2"
                  width="2.001"
                  height="2.002"></rect>
                <rect
                  x="36"
                  y="31"
                  fill="#506C7F"
                  width="2.001"
                  height="2.002"></rect>
                <rect
                  x="36"
                  y="41"
                  fill="#F9EBB2"
                  width="2.001"
                  height="2.002"></rect>
                <rect
                  x="54"
                  y="31"
                  fill="#F9EBB2"
                  width="2.001"
                  height="2.002"></rect>
                <rect
                  x="54"
                  y="41"
                  fill="#506C7F"
                  width="2.001"
                  height="2.002"></rect>
                <rect
                  x="54"
                  y="51"
                  fill="#F9EBB2"
                  width="2.001"
                  height="2.002"></rect>
              </g>
            </g>
          </svg>
          <div class="w-full text-2xl font-semibold">Studio</div>
        </div>
      </label>
    </li>
    <li class="h-full">
      <input
        input-radio-checked="house-section"
        type="radio"
        id="house-option"
        value="house-flat"
        name="place"
        class="hidden peer"
      />
      <label
        for="house-option"
        class="inline-flex h-44 items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-[#494f8c] peer-checked:bg-[#494f8c] hover:text-gray-600 peer-checked:text-white hover:bg-gray-50"
      >
        <div class="block">
          <svg
            class="mb-2 w-20 h-20"
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 64 64"
            enable-background="new 0 0 64 64"
            xml:space="preserve"
            fill="#000000"
            ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier">
              <g>
                <path
                  fill="#F9EBB2"
                  d="M56,60c0,1.104-0.896,2-2,2H38V47c0-0.553-0.447-1-1-1H27c-0.553,0-1,0.447-1,1v15H10c-1.104,0-2-0.896-2-2 V31.411L32.009,7.403L56,31.394V60z"
                ></path>
                <polygon
                  fill="#F76D57"
                  points="14,6 18,6 18,12.601 14,16.593 "></polygon>
                <rect x="28" y="48" fill="#F9EBB2" width="8" height="14"
                ></rect>
                <path
                  fill="#F76D57"
                  d="M61,33c-0.276,0-0.602-0.036-0.782-0.217L32.716,5.281c-0.195-0.195-0.451-0.293-0.707-0.293 s-0.512,0.098-0.707,0.293L3.791,32.793C3.61,32.974,3.276,33,3,33c-0.553,0-1-0.447-1-1c0-0.276,0.016-0.622,0.197-0.803 L31.035,2.41c0,0,0.373-0.41,0.974-0.41s0.982,0.398,0.982,0.398l28.806,28.805C61.978,31.384,62,31.724,62,32 C62,32.552,61.553,33,61,33z"
                ></path>
                <g>
                  <path
                    fill="#394240"
                    d="M63.211,29.789L34.438,1.015c0,0-0.937-1.015-2.43-1.015s-2.376,0.991-2.376,0.991L20,10.604V5 c0-0.553-0.447-1-1-1h-6c-0.553,0-1,0.447-1,1v13.589L0.783,29.783C0.24,30.326,0,31.172,0,32c0,1.656,1.343,3,3,3 c0.828,0,1.662-0.251,2.205-0.794L6,33.411V60c0,2.211,1.789,4,4,4h44c2.211,0,4-1.789,4-4V33.394l0.804,0.804 C59.347,34.739,60.172,35,61,35c1.657,0,3-1.343,3-3C64,31.171,63.754,30.332,63.211,29.789z M14,6h4v6.601l-4,3.992V6z M36,62h-8 V48h8V62z M56,60c0,1.104-0.896,2-2,2H38V47c0-0.553-0.447-1-1-1H27c-0.553,0-1,0.447-1,1v15H10c-1.104,0-2-0.896-2-2V31.411 L32.009,7.403L56,31.394V60z M61,33c-0.276,0-0.602-0.036-0.782-0.217L32.716,5.281c-0.195-0.195-0.451-0.293-0.707-0.293 s-0.512,0.098-0.707,0.293L3.791,32.793C3.61,32.974,3.276,33,3,33c-0.553,0-1-0.447-1-1c0-0.276,0.016-0.622,0.197-0.803 L31.035,2.41c0,0,0.373-0.41,0.974-0.41s0.982,0.398,0.982,0.398l28.806,28.805C61.978,31.384,62,31.724,62,32 C62,32.552,61.553,33,61,33z"
                  ></path>
                  <path
                    fill="#394240"
                    d="M23,32h-8c-0.553,0-1,0.447-1,1v8c0,0.553,0.447,1,1,1h8c0.553,0,1-0.447,1-1v-8 C24,32.447,23.553,32,23,32z M22,40h-6v-6h6V40z"
                  ></path>
                  <path
                    fill="#394240"
                    d="M41,42h8c0.553,0,1-0.447,1-1v-8c0-0.553-0.447-1-1-1h-8c-0.553,0-1,0.447-1,1v8 C40,41.553,40.447,42,41,42z M42,34h6v6h-6V34z"
                  ></path>
                </g>
                <rect x="28" y="48" fill="#506C7F" width="8" height="14"
                ></rect>
                <g>
                  <rect x="16" y="34" fill="#45AAB8" width="6" height="6"
                  ></rect>
                  <rect x="42" y="34" fill="#45AAB8" width="6" height="6"
                  ></rect>
                </g>
              </g>
            </g></svg
          >

          <div class="w-full text-2xl font-semibold">House/Flat</div>
        </div>
      </label>
    </li>
  </ul>
</div>
<div id="house-section" class="hidden w-full">
  <div
    class="flex justify-between items-center w-full px-2 md:px-16 mb-6 md:mb-5"
  >
    <label for="bedrooms-count" class="font-semibold text-lg text-muted"
      >How many bedrooms? <span class="text-red-500">*</span></label
    >
    <div
      class="h-10 w-28 bg-gray-50 flex border border-gray-200 rounded items-center mt-1"
    >
      <button
        type="button"
        id="decrement-button-bedrooms-count"
        data-input-counter="quantity-bedrooms-count"
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
        name="bedrooms_count"
        maxlength="1"
        min="1"
        type="text"
        id="quantity-bedrooms-count"
        class="px-2 text-center appearance-none outline-none text-gray-800 w-full bg-transparent"
        value="1"
        oninput="this.value = this.value.replace(/[^1-9]/g, '');"
        required
        disabled
      />
      <button
        type="button"
        id="increment-button-bedrooms-count"
        data-input-counter="quantity-bedrooms-count"
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
  'Office Cleaning': `<div
  class="flex justify-between items-center w-full px-5 md:px-20 my-2 pb-5"
>
  <label for="square_meters" class="font-semibold text-lg text-muted"
    >How many square meters is your office?
    <span class="text-red-500">*</span></label
  >
  <div
    class="h-10 w-28 bg-gray-50 flex border border-gray-200 rounded items-center mt-1"
  >
    <input
      name="square_meters"
      maxlength="3"
      min="1"
      type="text"
      id="quantity-square_meters"
      class="px-2 text-center appearance-none outline-none text-gray-800 w-full bg-transparent"
      value="0"
      oninput="this.value = this.value.replace(/[^0-9]/g, '');"
      required
    />
  </div>
</div>
<div
  class="flex-row justify-between items-center w-full px-2 md:px-20 my-2 pb-5"
>
  <label class="mb-5 text-lg font-medium text-gray-900">
    Which of the following apply to your office?
    <span class="text-red-500">*</span>
  </label>

  <ul class="grid w-full gap-2 md:gap-10 md:grid-cols-2 mt-4">
    <li class="h-full">
      <input
        input-option-checked="kitchen-section"
        type="checkbox"
        id="kitchen-option"
        value="kitchen"
        name="office_features"
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
          >
            <path
              fill="currentColor"
              d="m7.424 16.122l.176-.029l.899 5.573l-.176.029zm-2.401 5.506l.625-5.53l.177.02l-.625 5.53zM7.99 19.71l-.028-.178H5.45l-.02.178zm-.894-3.56l.388 3.371h.18l-.392-3.393zm.632 3.941l-.042-.37h-.179l.045.39zm-3.114-.005l.658-3.994l.175.03l-.658 3.993zm2.735-1.642l-1.777-.011l-.02.177l1.818.012zm-2.3.163l.303.002l.02-.178l-.295-.002zm1.13.018l.393.896h.194l-.392-.895zm-.954-3.269c-.054.079-.245.417-.176.6h1.8l1.608-.016a.46.46 0 0 0 .091-.416a.65.65 0 0 0-.275-.389a1.07 1.07 0 0 0-.63-.2h-.017l-1.564.021a1.05 1.05 0 0 0-.487.124a.94.94 0 0 0-.35.276m-.3.354a1.5 1.5 0 0 1 .193-.429a1 1 0 0 1 .36-.3a4 4 0 0 0-.566.05c-.09.022-.2.061-.226.116s0 .1.035.2a4 4 0 0 0 .203.363m7.703.462l.175-.028l.9 5.573l-.176.028zm-2.398 5.495l.623-5.531l.177.02l-.623 5.531zm2.965-1.907l-.028-.177h-2.514l-.02.177zm-.262.382l-.042-.371h-.179l.045.391zm-.065-.57l-.39-3.393l-.177.02l.388 3.373zm-3.05.565l.659-3.994l.175.029l-.658 3.994zm.435-1.48l.304.002l.02-.177l-.295-.002zm2.301-.162l-1.777-.012l-.02.178l1.817.012zm-1.17.181l.393.896h.194l-.392-.895zm2.092-3.49a1.06 1.06 0 0 0-.63-.2h-.015l-1.564.021a1.06 1.06 0 0 0-.487.123a.94.94 0 0 0-.35.28c-.055.079-.245.417-.176.6h1.8l1.608-.014a.45.45 0 0 0 .091-.415a.65.65 0 0 0-.277-.395m-3.153.148a1 1 0 0 1 .358-.3a5 5 0 0 0-.565.049c-.089.023-.2.062-.225.117s0 .1.035.2a4 4 0 0 0 .2.366a1.5 1.5 0 0 1 .197-.432m6.744-7.503h2.486v.337h-2.486zm0-1.783h2.486v.343h-2.486zM5.258 5.035l-.983-.13v3.9h.983zM5.12 8.558h-.683V5.205l.683.07zm10.452.244h1.287V4.95h-1.287zm.21-3.6h.845v3.356h-.846zm-1.523 3.6h1.252V4.95h-1.252zm.272-3.6h.777v3.356h-.777zm-7.05 3.6h2V5.035h-2zm.284-3.5H9.2v3.256H7.764zm-2.277 3.5h1.935V5.035H5.487zm.26-3.5h1.4v3.256h-1.4zM2.352 2.476h.318v6.548h-.318zm.376 6.548h.37l.03-5.917l-.387-.566zm.426 0h.832v-4.5l-.8-1.323Zm2.186-4.26L4.09 4.58v4.444h1.252zm-.024 4.1h-1.1v-4.03l1.1.145zm4.241-4.097H5.4v4.257h4.16zM9.542 8.86H5.43V4.98h4.113zm4.15.155l.33-.034V4.706l-.33.212zm3.281-4.333H14.11v4.3h2.863zm-.06 4.178h-2.71V4.891h2.71zM5.057 11.077l.356-.042a.13.13 0 0 0 .092-.06l.174-.3q-.235.042-.472.064l-.376.036a3 3 0 0 1-.287.012H4.31l.188.23a.13.13 0 0 0 .09.045zM4.7 10.67c0-.074-.04-.126-.076-.126s-.075.052-.075.126v.027h.148zm-.442-.115a.136.136 0 0 0 .2.12a.24.24 0 0 1 .06-.167a.135.135 0 0 0-.262.051zm.776.024a.15.15 0 0 0 .024.084l.141-.013l.145-.016a.2.2 0 0 0 .01-.055a.161.161 0 0 0-.32 0m.581.015a.14.14 0 0 0-.138-.124a.2.2 0 0 0-.055.012a.24.24 0 0 1 .02.1v.043zm-.684-.05a.09.09 0 0 0-.088.088a.1.1 0 0 0 .016.05l.107-.01a.2.2 0 0 1-.019-.093v-.033zm2.463.084v.16l.054.174a.084.084 0 0 0 .08.06l.3-.001a.08.08 0 0 0 .078-.052l.077-.192a.1.1 0 0 0 .006-.032v-.117a.084.084 0 0 0-.083-.084h-.428a.084.084 0 0 0-.084.084m8.724-.049v.308l.013.031a.034.034 0 0 0 .032.023h.338a.04.04 0 0 0 .033-.023v-.339a.035.035 0 0 0-.035-.035h-.34a.035.035 0 0 0-.04.035m.045-.122h.08v-.335h-.08zm.238 0h.092v-.385h-.092v.135zm-.1-.192h.042v.192h-.042zm-9.084-.116l.057.148l.131.177a.2.2 0 0 1 .068-.017l.038-.276l.134-.185l-.045-.061l-.01-.04l-.118-.047l-.148.093l.183.041l-.1.3zm.85-.202l-.024.372l-.072.15a.1.1 0 0 1 .042.021l.08-.164l.283-.24l-.1-.185zm-.41.444l-.02-.048l-.09.114h.067zm-.355-.31l-.04-.093l-.042-.01l-.072.08zm.476-.17l-.06.083l.095.124l-.035.045H7.8l.2-.316l-.256-.135l-.128.06l.022.082zm4.085.545h.115v.25h-.115zm.143-1.003a.7.7 0 0 0-.036-.255a.35.35 0 0 0-.075-.149a.17.17 0 0 0-.093-.06a.16.16 0 0 0-.105.019c-.043.025-.067.072-.084.168a1.5 1.5 0 0 0-.006.325h.058a1.4 1.4 0 0 1 .005-.309c.017-.094.037-.118.056-.129a.1.1 0 0 1 .065-.013a.12.12 0 0 1 .061.043a.3.3 0 0 1 .062.124a.7.7 0 0 1 .034.238a1 1 0 0 1-.072.3a.57.57 0 0 0-.054.291a2 2 0 0 1 .048.362h.058a2 2 0 0 0-.05-.375a.55.55 0 0 1 .052-.26a1 1 0 0 0 .076-.32m-.34.66l.073.076v-.077l-.074-.072v-.487h-.06v.054l-.019.973h-.033v.342h.16l.004-.337h-.052zM9.905 7.18h3.28v.132h-3.28Zm0-.273h3.28v.132h-3.28Zm0-.536h3.28v.357h-3.28zm1.635 3.51H9.833V6.245h3.45V9.88h-1.368l-.018.087h1.473V6.158H9.746v3.81h1.794zm-8.772.533l.1.554l.157-.059v-.544zm5.302.396l-.028.068h3.452v-.355h.035v-.179H8.158l-.022.02l-.078.172a.2.2 0 0 1 .027.093v.117a.2.2 0 0 1-.014.064m8.567.068v-.534h-.087v.124a.12.12 0 0 1 .074.112v.3zm-13.525 0h1.164l-.153-.187h.1a.22.22 0 0 1-.047-.136a.225.225 0 0 1 .152-.212H3.113zm2.26-.468a.2.2 0 0 1 .1-.026a.23.23 0 0 1 .224.195h.008l.141-.028l-.189.328h1.677l-.019-.063a.2.2 0 0 1-.008-.05v-.136a.17.17 0 0 1 .05-.12l-.12-.165H5.27a.24.24 0 0 1 .103.065m-.777.051h.028a.16.16 0 0 1 .144.112a.18.18 0 0 1 .163-.112a.2.2 0 0 1 .045.006a.25.25 0 0 1 .143-.12h-.653a.22.22 0 0 1 .13.114m11.51.007v-.124h-4.16v.055h.086v.366h-.23v-.366h.042v-.055h-.12v.184h.052v.35h4.26v-.3a.12.12 0 0 1 .07-.11M5.432 11.57v-.179l-2.762-.032l-.058-.248l.18-.078l-.104-.573l-.064-.238h-.35v1.597l2.81.028h.007v.189zm.125-.33H17.83v.13H5.558zm8.016 1.345l-.02-.02l-.128-.075l.567.3v-.544h-.979l-.2-.116h1.174v-.7H10.24v.7h-.116v-.7h-.275v.7h-.116v-.7H7.094v.7H4.767l-.009.006h-.006l.177-.228l-2.655-.026h.246v1.251h12.088zm-4.062-.738h-2.19a.073.073 0 0 1 0-.145h2.19a.073.073 0 1 1 0 .145m6.991-.818h-.338a.12.12 0 0 1-.087-.037L8 10.983l-.008.02a.17.17 0 0 1-.158.106h-.3a.17.17 0 0 1-.163-.12v-.007H5.606l-.02.035a.21.21 0 0 1-.156.1l-.36.047l-.48-.024a.21.21 0 0 1-.154-.077l-.078-.084h-1.25l-.419.205l.028.119l2.655.03l.12-.155h12.3l-.79-.181h-.415a.12.12 0 0 1-.084.032m-6.2.124l-.122-.117h3.12l.326.116zm-7.835 2.086h12.068v.268H2.468zm3.974.377H2.384v.036h3.884v1.17l.174-.004zM6.268 19h-.706l-.038.333h.896l-.152-.347zm-1.012 0h-.218l-.055.333h.235zm1.012-2.914h.174v2.29h-.174zm-3.884 3.247h2.29L4.73 19H2.384zm4.464-5.68h6.116v1.206a1.2 1.2 0 0 1 .591.224v-1.467h-6.91v1.2h.2zm5.087 5.68h.663L12.56 19h-.77zm-4.058 0L7.823 19h-.156l.04.333zM9.943 19h-1.81l.052.333h1.703zm-3.298-2.914h.203v2.293h-.203zm6.32.655l.417 2.592h.176v-3.209l-.594.005zm-6.117 1.943h-.203v.403l.108.246H7.4L7.361 19h-.513zm4.755.65L11.457 19h-.684l-.038.333zm1.361-.682V19h-.098l.04.333h.168zM10.466 19h-.215l-.055.333h.233zm-5.885.898l.074-.449h-2.27v.449zm7.405-.449l.032.073h.602l-.008-.073zm-7.096.449h.264l.051-.449h-.24zm1.581-.449h-.96l-.002.022h.972zm.332 0l.01.022h.602l-.002-.022zm.916 0l.003.022H7.9l-.003-.022zm-.255.449l-.014-.123H5.474l-.013.123zM2.058 2.035v20h20v-20zm19.783 13.262l-1.972-.662l.038-9.314l1.934-.459zm0-10.662l-1.933.458V3.904l1.928-.625zm0-1.585l-2.054.666l-16.182.065l.132.217l15.958-.063l-.043 10.666h-2.036v.218h2.126l2.1.708v6.292H2.275v-1.8h-.007v-6.084h.006v-.282h.11v-.038h-.11v-.109h.194v-.27h-.193v-.11h.246v-1.248h-.247V4.004h.02v-.218h-.02V2.252h19.567ZM9.795 19.897l.074-.449H8.204l.073.45zm-1.827 0l-.02-.123h-.19l.013.123zm2.135 0h.262l.051-.449h-.239zm1.551-.449h-.932l-.008.073h.972zm1.01.45l-.009-.073H10.68l-.008.072zm-7.078-7.78l.002-.694l1.014.003l-.002.694zm1.13.004l.003-.696h.26l-.001.696zm9.146.007H17.5v-.703h-3.39v.703h1.636zm-2.188 1.478h.32v1.261h-.32zm.435-.758l.558.295h-.029v.463h-.529v1.261h1.637v-2.623H14.11zm3.391 2.02v-2.624h-1.638v2.623h1.32zm-1.754.115h-2.072v.2a1 1 0 0 1 .09.105h3.3v-.3h-1.318zM3.108 9.082h-.217l.005 1.22l.083-.017v-.028h.134z"
            ></path>
          </svg>
          <div class="w-full text-2xl font-semibold">Kitchen</div>
        </div>
      </label>
    </li>
    <li>
      <input
        input-option-checked="bathrooms-section"
        type="checkbox"
        id="bathrooms-option"
        value="bathrooms"
        name="office_features"
        class="hidden peer"
      />
      <label
        for="bathrooms-option"
        class="inline-flex h-44 items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-[#494f8c] peer-checked:bg-[#494f8c] hover:text-gray-600 peer-checked:text-white hover:bg-gray-50"
      >
        <div class="block">
          <svg
            class="mb-2 w-20 h-20"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="m13.768 12.974l-.006-.001l-3.476.502v.083l3.475-.502l2.186.35l-.004-.084zm-5.64 1.989l2.087-.361l-.015-1.744l-2.072.259zm1.741-1.717c.059 0 .107.079.107.178s-.05.176-.109.176s-.105-.079-.105-.176s.048-.178.107-.178m1.391.408l-.972.15l.001.084l.971-.15zm-4.434.768l.264-.041v-.083l-.264.04zm0-.364l.264-.038v-.083l-.264.038ZM15.863 9.8l2.676.059v-3.39l-2.676.231Zm.247-2.87l2.182-.192v2.876l-2.182-.048Zm-9.284 7.896l.264-.043V14.7l-.264.043zm-4.35-3.877l.251.024V7.09l-.251.058Zm1.968-3.842L2.876 7.08v3.9l1.568-.075zm-.3 3.549l-.957.041V7.4h.974Zm1.938.159l.033-3.677l-1.568-.027l.012 3.789ZM5.832 7.4l-.01 3.173l-.957.052L4.857 7.4ZM3.385 18.763l-.032-5.029l-.819-.254v4.687zm6.907-4.501l.968-.158v-.083l-.969.157zm.328.697l.174.052l.466-.085v-.083zm-1.779.234l1.058.346a1.13 1.13 0 0 0 .6.027l1.05-.245a.01.01 0 0 0 .008-.009a.01.01 0 0 0-.007-.01l-1.26-.376zm1.455-.505l.964-.169v-.083l-.965.169zm-3.47-1.051l.264-.035v-.083l-.264.035zm1.899 2.584a.4.4 0 0 0-.112-.088a.4.4 0 0 1-.157-.133a.83.83 0 0 1-.018-.75l.012-.037l.037.01l.113.033h.025l-.171-.056l1.707-.314h.018l.036-.006v-.193l-2.083.359l-.006-.034v2.477l.575-.133a1.2 1.2 0 0 1 .043-.571c.056-.226.1-.421-.019-.564m2.175.173c.014-.042.065-.048.2-.065s.387-.047.41-.132a2.3 2.3 0 0 0 .075-.695a4.5 4.5 0 0 1-1.515.3a3.4 3.4 0 0 1-.764-.222a11 11 0 0 0-.806-.268a.72.72 0 0 0 .021.64a.3.3 0 0 0 .129.111a.4.4 0 0 1 .135.107c.147.175.093.4.036.637a1.06 1.06 0 0 0-.033.569l1.19.477a3.8 3.8 0 0 0 .986-.265a5 5 0 0 0-.047-.571a1.8 1.8 0 0 1-.017-.623m.453-2.794v1.581l.228.068a.07.07 0 0 1 .041.064v.056a.1.1 0 0 1-.009.032h.007l.023.017a1.44 1.44 0 0 1-.025.7l6.3 2l-.065-3.218zm-.34 3.5q.014.112.024.223l3.09 1.174l2.1-.755l-3.562-1.129zM2 2v20h20V2Zm11.767 9.647l-1.394.148v-.29l1.386-.148l7.991.771v.369zm7.986 1.292l-7.986-.979l-1.391.15v-.232l1.4-.152l7.976.854zm-7.991-1.664l-1.383.147v-.255l1.395-.11l7.979.673v.316zm.012-.3l-1.395.11v-.31l1.393-.077l7.979.58v.369zm0-.359l-1.384.076v-.268l1.373-.052l7.991.5v.324zm1.926-.648V6.553l3-.264v3.745zm4.915-7.721l-6.838 1.407L5.99 2.247ZM8.915 4.7v-.207l3.351.348l.04 5.5v.066l-.013 1.71l-3.374.366v-2.91l2.848-.083l.033-4.509ZM2.394 11V7.082l.416-.095V7l1.716.029l1.674.028l-.018 1.773l.018 1.94l2.633-.124v.33l-6.585.441V11Zm-.147.5l6.585-.441v.313l-6.585.553zm0 .507l6.585-.553v.3l-6.585.611zm1.887.932l-.055.071l-1.832.2v-.343l1.874-.186zm.351.219a4 4 0 0 1 1.491-.015c.015.079-.675.147-1.009.177a5.5 5.5 0 0 1-1.447.064c0-.09.652-.184.965-.226m.22-.625l-.287-.069v-.1l.264-.048l-.366-.061l4.516-.419v.278zm4.127-.32v.28l-4.388.476v-.321l.111-.01l.02.006l.233-.031zm-6.585.231l1.853-.173l.006.118v.1l.006.108l-1.87.19zm19.53 9.31H2.247v-3.478l.227-.05l-.022-.016v-.31l-.205.043v-.457l.205-.04v-.084l-.205.041v-.352l.205-.04v-.081l-.205.04v-.413l.205-.037v-.083l-.205.037V16.1l.205-.035v-.084l-.205.036v-.44l.205-.034v-.083l-.205.033v-.36l.205-.032v-.083l-.205.032v-.33l.205-.03v-.083l-.205.03v-.387l.205-.027v-.083l-.205.027v-.4l.205-.024v-.083l-.205.024v-.4l1.844-.2l.02.011l-1.8.2l.842.282h-.012l.192.059l.033.011l.019.007l3.651-.454l.054-.007v-.083l-.162.02l-.987-.23l-1.453.158l-.01-.012l9.283-1.007l7.992.98v.355l-7.986-1.067l-3.618.434l.168.022h-.032v.04l3.482-.418l7.991 1.068v.347l-4.841-.711v.083l4.841.711v.369l-4.841-.775v.075l.041.015l4.8.768v.306l-1.484-.256v.083l1.486.256v.4l-1.5-.282v.083l1.5.283v.307l-1.5-.286v.083l1.506.287v.421l-1.515-.31v.083l1.517.311v.331l-1.524-.33v.084l1.526.33v.447l-1.536-.357v.084l1.538.358v.263l-1.544-.352v.179l-.159.079l1.708.408zm-3.709-3.651l2.055-1.015l.065-2.776l-2.191.575zm-.082-3.303l.676-.175h.007l.185-.049l.525-.136l.895-.231l.026-.009l-3.4-.562l-.113.03l-.209-.029l-.029-.035l.022-.02l-.416-.069l-.044.018l-.163-.033v-.019l-2.248-.374l-2.447.375l.49.1h-.026l.236.047h.024l.759.153h-.018l.231.046h.016l1.307.263l-.342-.065l1.538.306l2.434.49h.028L18 14.8ZM12.1 13.538a.043.043 0 0 1 0-.085l1.306-.2a2 2 0 0 1 .171-.016l.357.632zm5.495.981l-3.55-.634l-.369-.654a2 2 0 0 1 .259.022l5.239.879a.046.046 0 0 1 .029.058a.05.05 0 0 1-.029.029l-1.2.288a.9.9 0 0 1-.374.012Zm-9.509-1.512l1.91-.246l-.73-.097l-1.929.206Zm-1.26 3.569l.264-.053v-.084l-.264.053zm0-1.281l.264-.046v-.084l-.264.046zm0 .434l.264-.048v-.084l-.264.048zm0 .425l.264-.052v-.084l-.264.052Zm1.182-3.046l-.836-.156v4.155l.818.37zm-1.182 4.153l.325-.072l-.061-.028v-.247l-.264.056ZM5.34 18.309l1.4-.353v-4.613l-1.44.177Zm1.16-4.636l.032.293l-.946.142l-.05-.3zm-3 .064l.047 5.056l1.713-.463l-.085-4.793Zm.411.593l-.045-.3l.963-.144l.027.295zm11.985-1.123l.061.004l.012.225l-.004.05l.142.029l.099-.041l-.001-.02l-.03-.007v-.223l.204-.027h.002l.18.026l.035-.001l.012.359l-.032.028l.011.014l.199.028l.161-.042v-.018l-.055-.02v-.598l-.178-.009l-.236.056v.016l.127.017l-.002.089l-.423-.048l-.002-.193l-.17-.022l-.179.041v.013l.129.021l.002.174l-.06.02zm.041-.24l-.129-.021v-.02l-2.04-.299l-.006-.001l-3.48.466l.001.082l3.479-.465l2.176.32z"
            ></path>
          </svg>
          <div class="w-full text-2xl font-semibold">Bathrooms</div>
        </div>
      </label>
    </li>
    <li>
      <input
        input-option-checked="toilets-section"
        type="checkbox"
        id="toilets-option"
        value="toilets"
        name="office_features"
        class="hidden peer"
      />
      <label
        for="toilets-option"
        class="inline-flex h-44 items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-[#494f8c] peer-checked:bg-[#494f8c] hover:text-gray-600 peer-checked:text-white hover:bg-gray-50"
      >
        <div class="block">
          <svg
            class="mb-2 w-20 h-20"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
          >
            <path
              fill="currentColor"
              d="M9 19a1 1 0 1 1 0-2h3.803C10.546 15.506 9 12.488 9 9c0-4.971 3.134-9 7-9s7 4.029 7 9c0 3.488-1.546 6.506-3.803 8H23a1 1 0 1 1 0 2zm14.2 2c.441 0 .8.348.8.777v.22c0 3.286-2.1 5.815-5.065 6.952c-.423.163-.703.56-.703 1.004v.962c0 .6-.5 1.085-1.116 1.085h-2.232c-.617 0-1.117-.485-1.117-1.085v-.978c0-.444-.279-.837-.702-1.004C10.07 27.747 7.997 25.082 8 21.77c0-.426.362-.77.8-.77z"
            ></path>
          </svg>
          <div class="w-full text-2xl font-semibold">Toilets</div>
        </div>
      </label>
    </li>
    <li>
      <input
        input-option-checked="other-section"
        type="checkbox"
        id="other-option"
        value="others"
        name="office_features"
        class="hidden peer"
      />
      <label
        for="other-option"
        class="inline-flex h-44 items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-[#494f8c] peer-checked:bg-[#494f8c] hover:text-gray-600 peer-checked:text-white hover:bg-gray-50"
      >
        <div class="block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="mb-2 w-20 h-20"
            viewBox="0 0 24 24"
          >
            <g fill="none" stroke="currentColor" stroke-width="1.5">
              <circle cx="12" cy="12" r="10"></circle>
              <path stroke-linecap="round" d="M15 12h-3m0 0H9m3 0V9m0 3v3"
              ></path>
            </g>
          </svg>
          <div class="w-full text-2xl font-semibold">Other</div>
        </div>
      </label>
    </li>
  </ul>
</div>
<div id="kitchen-section" class="hidden w-full">
  <div
    class="flex justify-between items-center w-full px-2 md:px-16 mb-6 md:mb-5"
  >
    <label for="kitchens-count" class="font-semibold text-lg text-muted"
      >How many kitchens do you have?
      <span class="text-red-500">*</span></label
    >
    <div
      class="h-10 w-28 bg-gray-50 flex border border-gray-200 rounded items-center mt-1"
    >
      <button
        type="button"
        id="decrement-button-kitchens-count"
        data-input-counter="quantity-kitchens-count"
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
        name="kitchens_count"
        maxlength="1"
        min="1"
        type="text"
        id="quantity-kitchens-count"
        class="px-2 text-center appearance-none outline-none text-gray-800 w-full bg-transparent"
        value="1"
        oninput="this.value = this.value.replace(/[^1-9]/g, '');"
        required
        disabled
      />
      <button
        type="button"
        id="increment-button-kitchens-count"
        data-input-counter="quantity-kitchens-count"
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
<div id="bathrooms-section" class="hidden w-full">
  <div
    class="flex justify-between items-center w-full px-2 md:px-16 mb-6 md:mb-5"
  >
    <label for="bathrooms-count" class="font-semibold text-lg text-muted"
      >How many bathrooms do you have?
      <span class="text-red-500">*</span></label
    >
    <div
      class="h-10 w-28 bg-gray-50 flex border border-gray-200 rounded items-center mt-1"
    >
      <button
        type="button"
        id="decrement-button-bathrooms-count"
        data-input-counter="quantity-bathrooms-count"
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
        name="bathrooms_count"
        maxlength="1"
        min="1"
        type="text"
        id="quantity-bathrooms-count"
        class="px-2 text-center appearance-none outline-none text-gray-800 w-full bg-transparent"
        value="1"
        oninput="this.value = this.value.replace(/[^1-9]/g, '');"
        required
        disabled
      />
      <button
        type="button"
        id="increment-button-bathrooms-count"
        data-input-counter="quantity-bathrooms-count"
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
<div id="toilets-section" class="hidden w-full">
  <div
    class="flex justify-between items-center w-full px-2 md:px-16 mb-6 md:mb-5"
  >
    <label for="toilets-count" class="font-semibold text-lg text-muted"
      >How many toilets do you have?
      <span class="text-red-500">*</span></label
    >
    <div
      class="h-10 w-28 bg-gray-50 flex border border-gray-200 rounded items-center mt-1"
    >
      <button
        type="button"
        id="decrement-button-toilets-count"
        data-input-counter="quantity-toilets-count"
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
        name="toilets_count"
        maxlength="1"
        min="1"
        type="text"
        id="quantity-toilets-count"
        class="px-2 text-center appearance-none outline-none text-gray-800 w-full bg-transparent"
        value="1"
        oninput="this.value = this.value.replace(/[^1-9]/g, '');"
        required
        disabled
      />
      <button
        type="button"
        id="increment-button-toilets-count"
        data-input-counter="quantity-toilets-count"
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
<div id="other-section" class="hidden w-full">
  <div
    class="flex-row justify-between items-center w-full px-2 md:px-16 mb-6 md:mb-5"
  >
    <label
      class="block tracking-wide text-gray-700 text-base font-bold mb-2"
      for="others_features"
    >
      Others <span class="text-red-500">*</span>
    </label>
    <input
      class="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-800"
      id="others_features"
      name="others_features"
      type="text"
      required
      disabled
    />
  </div>
</div>
<div class="flex-row w-full px-2 md:px-16 mb-6 md:mb-5">
  <label
    class="block tracking-wide text-gray-700 text-base font-bold mb-2"
  >
    How often would you like the service?
    <span class="text-red-500">*</span>
  </label>
  <div class="grid grid-cols-3 gap-5">
    <div class="flex items-center ps-4 border border-gray-200 rounded">
      <input
        id="frequency_service-radio-1"
        type="radio"
        value="once"
        name="frequency_service"
        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
        required
      />
      <label
        for="frequency_service-radio-1"
        class="w-full py-4 ms-2 text-sm font-medium text-gray-900"
        >Once</label
      >
    </div>
    <div class="flex items-center ps-4 border border-gray-200 rounded">
      <input
        id="frequency_service-radio-2"
        type="radio"
        value="weekly"
        name="frequency_service"
        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
      />
      <label
        for="frequency_service-radio-2"
        class="w-full py-4 ms-2 text-sm font-medium text-gray-900"
        >Weekly</label
      >
    </div>
    <div class="flex items-center ps-4 border border-gray-200 rounded">
      <input
        id="frequency_service-radio-3"
        type="radio"
        value="fortnightly"
        name="frequency_service"
        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
      />
      <label
        for="frequency_service-radio-3"
        class="w-full py-4 ms-2 text-sm font-medium text-gray-900"
        >Fortnightly</label
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
  'Carpet Cleaning': `<div
  class="flex justify-between items-center w-full px-5 md:px-20 my-2 pb-5 border-b-4 border-dotted"
>
  <div class="flex flex-col">
    <label for="bedroom" class="font-semibold text-xl text-muted"
      >Bedroom
    </label>
    <span class="text-gray-600 text-xs">up to 20 sq. m.</span>
  </div>
  <div
    class="h-10 w-28 bg-gray-50 flex border border-gray-200 rounded items-center mt-1"
  >
    <button
      type="button"
      id="decrement-button-bedroom"
      data-input-counter="quantity-bedroom"
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
      name="bedroom"
      maxlength="1"
      min="0"
      value="0"
      oninput="this.value = this.value.replace(/[^0-9]/g, '');"
      type="text"
      id="quantity-bedroom"
      class="px-2 text-center appearance-none outline-none text-gray-800 w-full bg-transparent"
      required
    />
    <button
      type="button"
      id="increment-button-bedroom"
      data-input-counter="quantity-bedroom"
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
  <div class="flex flex-col">
    <label for="double_bedroom" class="font-semibold text-xl text-muted"
      >Double bedroom
    </label>
    <span class="text-gray-600 text-xs">up to 30 sq. m.</span>
  </div>
  <div
    class="h-10 w-28 bg-gray-50 flex border border-gray-200 rounded items-center mt-1"
  >
    <button
      type="button"
      id="decrement-button-double_bedroom"
      data-input-counter="quantity-double_bedroom"
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
      name="double_bedroom"
      maxlength="1"
      min="0"
      value="0"
      oninput="this.value = this.value.replace(/[^0-9]/g, '');"
      type="text"
      id="quantity-double_bedroom"
      class="px-2 text-center appearance-none outline-none text-gray-800 w-full bg-transparent"
      required
    />
    <button
      type="button"
      id="increment-button-double_bedroom"
      data-input-counter="quantity-double_bedroom"
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
  <div class="flex flex-col">
    <label for="lounge" class="font-semibold text-xl text-muted"
      >Lounge
    </label>
    <span class="text-gray-600 text-xs">up to 30 sq. m.</span>
  </div>
  <div
    class="h-10 w-28 bg-gray-50 flex border border-gray-200 rounded items-center mt-1"
  >
    <button
      type="button"
      id="decrement-button-lounge"
      data-input-counter="quantity-lounge"
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
      name="lounge"
      maxlength="1"
      min="0"
      value="0"
      oninput="this.value = this.value.replace(/[^0-9]/g, '');"
      type="text"
      id="quantity-lounge"
      class="px-2 text-center appearance-none outline-none text-gray-800 w-full bg-transparent"
      required
    />
    <button
      type="button"
      id="increment-button-lounge"
      data-input-counter="quantity-lounge"
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
  <div class="flex flex-col">
    <label for="stairs" class="font-semibold text-xl text-muted"
      >Stairs
    </label>
    <span class="text-gray-600 text-xs">up to 30 sq. m.</span>
  </div>
  <div
    class="h-10 w-28 bg-gray-50 flex border border-gray-200 rounded items-center mt-1"
  >
    <button
      type="button"
      id="decrement-button-stairs"
      data-input-counter="quantity-stairs"
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
      name="stairs"
      maxlength="1"
      min="0"
      value="0"
      oninput="this.value = this.value.replace(/[^0-9]/g, '');"
      type="text"
      id="quantity-stairs"
      class="px-2 text-center appearance-none outline-none text-gray-800 w-full bg-transparent"
      required
    />
    <button
      type="button"
      id="increment-button-stairs"
      data-input-counter="quantity-stairs"
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
  <div class="flex flex-col">
    <label for="landing" class="font-semibold text-xl text-muted"
      >Landing
    </label>
    <span class="text-gray-600 text-xs">up to 2 sq. m.</span>
  </div>
  <div
    class="h-10 w-28 bg-gray-50 flex border border-gray-200 rounded items-center mt-1"
  >
    <button
      type="button"
      id="decrement-button-landing"
      data-input-counter="quantity-landing"
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
      name="landing"
      maxlength="1"
      min="0"
      value="0"
      oninput="this.value = this.value.replace(/[^0-9]/g, '');"
      type="text"
      id="quantity-landing"
      class="px-2 text-center appearance-none outline-none text-gray-800 w-full bg-transparent"
      required
    />
    <button
      type="button"
      id="increment-button-landing"
      data-input-counter="quantity-landing"
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
  <div class="flex flex-col">
    <label for="bathroom" class="font-semibold text-xl text-muted"
      >Bathroom
    </label>
    <span class="text-gray-600 text-xs">up to 5 sq. m.</span>
  </div>
  <div
    class="h-10 w-28 bg-gray-50 flex border border-gray-200 rounded items-center mt-1"
  >
    <button
      type="button"
      id="decrement-button-bathroom"
      data-input-counter="quantity-bathroom"
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
      name="bathroom"
      maxlength="1"
      min="0"
      value="0"
      oninput="this.value = this.value.replace(/[^0-9]/g, '');"
      type="text"
      id="quantity-bathroom"
      class="px-2 text-center appearance-none outline-none text-gray-800 w-full bg-transparent"
      required
    />
    <button
      type="button"
      id="increment-button-bathroom"
      data-input-counter="quantity-bathroom"
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
  <div class="flex flex-col">
    <label for="hallway" class="font-semibold text-xl text-muted"
      >Hallway
    </label>
    <span class="text-gray-600 text-xs">up to 20 sq. m.</span>
  </div>
  <div
    class="h-10 w-28 bg-gray-50 flex border border-gray-200 rounded items-center mt-1"
  >
    <button
      type="button"
      id="decrement-button-hallway"
      data-input-counter="quantity-hallway"
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
      name="hallway"
      maxlength="1"
      min="0"
      value="0"
      oninput="this.value = this.value.replace(/[^0-9]/g, '');"
      type="text"
      id="quantity-hallway"
      class="px-2 text-center appearance-none outline-none text-gray-800 w-full bg-transparent"
      required
    />
    <button
      type="button"
      id="increment-button-hallway"
      data-input-counter="quantity-hallway"
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
  <div class="flex flex-col">
    <label for="kitchen" class="font-semibold text-xl text-muted"
      >Kitchen
    </label>
    <span class="text-gray-600 text-xs">up to 20 sq. m.</span>
  </div>
  <div
    class="h-10 w-28 bg-gray-50 flex border border-gray-200 rounded items-center mt-1"
  >
    <button
      type="button"
      id="decrement-button-kitchen"
      data-input-counter="quantity-kitchen"
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
      name="kitchen"
      maxlength="1"
      min="0"
      value="0"
      oninput="this.value = this.value.replace(/[^0-9]/g, '');"
      type="text"
      id="quantity-kitchen"
      class="px-2 text-center appearance-none outline-none text-gray-800 w-full bg-transparent"
      required
    />
    <button
      type="button"
      id="increment-button-kitchen"
      data-input-counter="quantity-kitchen"
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
  <div class="flex flex-col">
    <label for="dining_room" class="font-semibold text-xl text-muted"
      >Dining room
    </label>
    <span class="text-gray-600 text-xs">up to 30 sq. m.</span>
  </div>
  <div
    class="h-10 w-28 bg-gray-50 flex border border-gray-200 rounded items-center mt-1"
  >
    <button
      type="button"
      id="decrement-button-dining_room"
      data-input-counter="quantity-dining_room"
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
      name="dining_room"
      maxlength="1"
      min="0"
      value="0"
      oninput="this.value = this.value.replace(/[^0-9]/g, '');"
      type="text"
      id="quantity-dining_room"
      class="px-2 text-center appearance-none outline-none text-gray-800 w-full bg-transparent"
      required
    />
    <button
      type="button"
      id="increment-button-dining_room"
      data-input-counter="quantity-dining_room"
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
  <div class="flex flex-col">
    <label for="small_rug" class="font-semibold text-xl text-muted"
      >Small rug
    </label>
    <span class="text-gray-600 text-xs">up to 4 sq. m.</span>
  </div>
  <div
    class="h-10 w-28 bg-gray-50 flex border border-gray-200 rounded items-center mt-1"
  >
    <button
      type="button"
      id="decrement-button-small_rug"
      data-input-counter="quantity-small_rug"
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
      name="small_rug"
      maxlength="1"
      min="0"
      value="0"
      oninput="this.value = this.value.replace(/[^0-9]/g, '');"
      type="text"
      id="quantity-small_rug"
      class="px-2 text-center appearance-none outline-none text-gray-800 w-full bg-transparent"
      required
    />
    <button
      type="button"
      id="increment-button-small_rug"
      data-input-counter="quantity-small_rug"
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
  <div class="flex flex-col">
    <label for="medium_rug" class="font-semibold text-xl text-muted"
      >Medium rug
    </label>
    <span class="text-gray-600 text-xs">up to 8 sq. m.</span>
  </div>
  <div
    class="h-10 w-28 bg-gray-50 flex border border-gray-200 rounded items-center mt-1"
  >
    <button
      type="button"
      id="decrement-button-medium_rug"
      data-input-counter="quantity-medium_rug"
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
      name="medium_rug"
      maxlength="1"
      min="0"
      value="0"
      oninput="this.value = this.value.replace(/[^0-9]/g, '');"
      type="text"
      id="quantity-medium_rug"
      class="px-2 text-center appearance-none outline-none text-gray-800 w-full bg-transparent"
      required
    />
    <button
      type="button"
      id="increment-button-medium_rug"
      data-input-counter="quantity-medium_rug"
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
  <div class="flex flex-col">
    <label for="large_rug" class="font-semibold text-xl text-muted"
      >Large rug
    </label>
    <span class="text-gray-600 text-xs">up to 15 sq. m.</span>
  </div>
  <div
    class="h-10 w-28 bg-gray-50 flex border border-gray-200 rounded items-center mt-1"
  >
    <button
      type="button"
      id="decrement-button-large_rug"
      data-input-counter="quantity-large_rug"
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
      name="large_rug"
      maxlength="1"
      min="0"
      value="0"
      oninput="this.value = this.value.replace(/[^0-9]/g, '');"
      type="text"
      id="quantity-large_rug"
      class="px-2 text-center appearance-none outline-none text-gray-800 w-full bg-transparent"
      required
    />
    <button
      type="button"
      id="increment-button-large_rug"
      data-input-counter="quantity-large_rug"
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
<div class="w-full px-2 md:px-16 mt-8 mb-6 md:mb-5">
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
  />
</div>
<div class="flex-row w-full px-2 md:px-16 mb-6 md:mb-5">
  <label
    class="block tracking-wide text-gray-700 text-base font-bold mb-2"
  >
    On average, how would you describe the dirt level in all areas of your
    carpet? <span class="text-red-500">*</span>
  </label>
  <div class="grid md:grid-cols-3 gap-5">
    <div class="flex items-center ps-4 border border-gray-200 rounded">
      <input
        id="average-clean"
        type="radio"
        value="clean"
        name="average-dirt"
        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
        required
      />
      <label
        for="average-clean"
        class="w-full py-4 ms-2 text-sm font-medium text-gray-900"
        >Clean</label
      >
    </div>
    <div class="flex items-center ps-4 border border-gray-200 rounded">
      <input
        id="average-moderate"
        type="radio"
        value="moderate"
        name="average-dirt"
        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
      />
      <label
        for="average-moderate"
        class="w-full py-4 ms-2 text-sm font-medium text-gray-900"
        >Moderate</label
      >
    </div>
    <div class="flex items-center ps-4 border border-gray-200 rounded">
      <input
        id="average-heavy"
        type="radio"
        value="heavy"
        name="average-dirt"
        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
      />
      <label
        for="average-heavy"
        class="w-full py-4 ms-2 text-sm font-medium text-gray-900"
        >Heavy</label
      >
    </div>
  </div>
</div>
<div class="flex-row w-full px-2 md:px-16 mb-6 md:mb-5">
  <label
    class="block tracking-wide text-gray-700 text-base font-bold mb-2"
  >
    What materials is your carpet made of? (Select all that apply)
  </label>
  <ul class="grid w-full gap-2 md:gap-10 md:grid-cols-3 mt-4">
    <li class="h-full">
      <input
        type="checkbox"
        id="material-wool"
        name="material"
        class="hidden peer"
        value="wool"
      />
      <label
        for="material-wool"
        class="inline-flex h-44 items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-[#494f8c] peer-checked:bg-[#494f8c] hover:text-gray-600 peer-checked:text-white hover:bg-gray-50"
      >
        <div class="block">
          <svg
            class="mb-2 w-20 h-20"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            ><path
              fill="currentColor"
              d="M332.04 27.759c-4.596 2.47-10.075 7.56-14.275 14.453c-2.602 5.644-11.487 22.4-3.68 27.5c9.571 1.4 18.325-8.765 22.752-15.879c4.2-6.894 6.212-14.097 6.3-19.314c.25-9.162-5.102-9.93-11.097-6.76m-35.082 49.057c-17.085 22.447-30.962 44.18-45.3 64.636a1291 1291 0 0 0-35.102-24.556c-21.021-10.201-22.682-3.57-28.057.078c17.396 13.455 34.746 26.954 51.877 40.576l-10.354 14.775c-21.77-17.33-43.972-34.51-66.23-51.7a182 182 0 0 0-13.441 3.48a2180 2180 0 0 1 16.523 29.632c15.874 12.41 32.705 25.03 49.549 37.993l-10.442 14.898a5041 5041 0 0 0-18.484-14.2c8.628 16.656 17.002 33.46 25.057 50.409c20.13 13.193 44.62 31.66 62.4 44.44c3.916-.75 7.82-1.533 11.715-2.337l-18.424 21.84a768 768 0 0 1-25.52 4.08c2.098 5.112 4.148 10.24 6.174 15.375a899 899 0 0 0 137.143-28.658c5.08-7.527 6.204-14.563-1.344-20.562c-28.95 9.639-58.497 17.842-88.736 24.341l19.406-22.945a814 814 0 0 0 28.172-7.504a944 944 0 0 0-12.02-11.593l11.653-13.78a940 940 0 0 1 19.992 19.51a876 876 0 0 0 18.436-5.963a182 182 0 0 0-4.067-15.088a1687 1687 0 0 0-18.842-16.808l67.805-80.17c-6.175-1.897-11.06-6.287-13.598-11.723l-55.459 65.746c-18.82-29.505-45.863-53.235-77.923-67.972L311.31 87.7c-6.206-1.37-11.54-5.817-14.352-10.884m156.94 13.267c-4.9 1.797-11.044 6.058-16.176 12.29c-3.37 5.216-14.532 20.556-7.528 26.704c9.276 2.736 19.38-6.087 24.768-12.504c5.132-6.231 8.138-13.077 8.963-18.23s-.34-7.571-1.438-8.475c-2.728-1.57-6.156-.662-8.59.215zm-320.524 40.723c-9.202-3.944-14.229-1.076-15.666 7.63c61.04 106.67 106.595 219.245 144.486 334.592c11.13 4.931 10.359-1.798 13.073-4.56c-27.876-117.522-81.03-230.756-141.893-337.662m143.127 6.564c27.765 20.66 54.483 42.173 80.338 64.383l-11.604 13.756c-25.474-21.888-51.767-43.07-79.064-63.399zm-174.16 10.447c-15.251-4.231-12.5 5.804-15.385 11.512c76.376 111.834 103.795 216.838 143.553 321.967c8.333 6.566 12.036 2.365 14.379-3.275c-37.546-114.2-82.537-225.242-142.547-330.204m152.117 21.004c26.123 21.061 51.575 42.484 75.68 64.586l-11.623 13.778c-23.597-21.658-48.62-42.759-74.416-63.582zm-181.01 2.662c-9.338-2.596-11.688 3.193-11.44 12.083c55.283 98.074 99.863 193.737 132.585 300.882c10.108 5.981 14.405 3.828 17.693-.463c-39.185-104.242-66.175-205.338-138.838-312.502m-23.406 27.44a182 182 0 0 0-22.596 48.787l40.008-17.041a2111 2111 0 0 0-17.412-31.746m180.613 3.863c25.72 20.202 50.754 41.287 71.557 63.725l-11.715 13.89C270.68 258.862 246 238.05 220.192 217.716zM75.927 246.624l-53.412 22.75c-5.851 3.791-7.273 9.93-2.15 19.541l64.513-25.027a1802 1802 0 0 0-8.951-17.264m151.459 28.426a1343 1343 0 0 1 8.146 18.674a752 752 0 0 0 14.666-2.133c-7.36-5.36-15.139-11.038-22.812-16.541m-134.36 4.984l-40.375 15.662a759 759 0 0 0 49.996 3.977a1609 1609 0 0 0-9.62-19.639zm-72.672 29.547c-1.801 5.343-5.821 10.118 1.733 17.072a918 918 0 0 0 96.285 6.766a1473 1473 0 0 0-7.057-15.416c-29.61-.99-59.907-3.728-90.96-8.422zm364.907 6.96a917 917 0 0 1-129.692 26.968a1126 1126 0 0 1 5.49 14.918c39.738-4.882 80.213-12.616 121.637-23.924c6.55-4.86 10.362-10.291 2.565-17.963zM25.845 345.238c-2.76 3.598-7.863 6.493 4.052 13.528c33.771 3.469 67.817 5.712 102.278 6.261a1382 1382 0 0 0-5.781-13.49a934 934 0 0 1-100.55-6.299zm351.783 9.233a875 875 0 0 1-57.195 12.877l47.392 17.822c9.683 3.145 30.587 11.951 29.406 20.983c-2.359 13.928-27.517 11.142-34.53 21.632c-1.93 3.205-2.83 7.536-2.182 11.524c18.943 40.217 75.27 45.85 114.746 46.886c15.587.961 10.116-14.706-1.11-15.016c-24.701-3.81-85.094-6.218-90.271-29.144c-2.465-15.017 32.627-16.775 32.57-31.993c-.078-20.225-26.292-36.584-43.61-42.188a182 182 0 0 0 4.784-13.383m-92.469 18.844a887 887 0 0 1-18.008 2.476q3.068 8.985 5.967 18.014l65.526 28.564c8.046-2.521 20.204-1.952 17.373-22.408zm-247.607 4.3a182.7 182.7 0 0 0 17.13 28.987l-.45-27.498q-8.356-.693-16.68-1.489m34.705 2.858l.783 47.773c2.852 16.181 11.086 16.074 19.26 16.893l.086-63.448a1203 1203 0 0 1-20.13-1.218zm38.129 1.994l-.102 74.74c3.905 9.613 9.563 15.077 19.51 9.957l-1.48-84.203a1087 1087 0 0 1-17.928-.494m36.244 18.256l1.285 73.234a182 182 0 0 0 26.596 6.229a1272 1272 0 0 0-27.881-79.463m133.476 15.763a923 923 0 0 1 11.604 43.082a183.3 183.3 0 0 0 33.178-23.56z"
            ></path></svg
          >
          <div class="w-full text-2xl font-semibold">Wool</div>
        </div>
      </label>
    </li>
    <li>
      <input
        type="checkbox"
        id="material-synthetic"
        name="material"
        class="hidden peer"
        value="synthetic"
      />
      <label
        for="material-synthetic"
        class="inline-flex h-44 items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-[#494f8c] peer-checked:bg-[#494f8c] hover:text-gray-600 peer-checked:text-white hover:bg-gray-50"
      >
        <div class="block">
          <svg
            class="mb-2 w-20 h-20"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512"
            ><path
              fill="currentColor"
              d="M24 64h56v384H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h8v-40h-8c-13.3 0-24-10.7-24-24s10.7-24 24-24h8v-32h-8c-13.3 0-24-10.7-24-24s10.7-24 24-24h8v-32h-8c-13.3 0-24-10.7-24-24s10.7-24 24-24h8v-40h-8c-13.3 0-24-10.7-24-24s10.7-24 24-24m88 0h416v384H112zm528 24c0 13.3-10.7 24-24 24h-8v40h8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8v32h8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8v32h8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8v40h8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-56V64h56c13.3 0 24 10.7 24 24"
            ></path></svg
          >
          <div class="w-full text-2xl font-semibold">Synthetic</div>
        </div>
      </label>
    </li>
    <li>
      <input
        type="checkbox"
        id="material-cotton"
        name="material"
        class="hidden peer"
        value="cotton"
      />
      <label
        for="material-cotton"
        class="inline-flex h-44 items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-[#494f8c] peer-checked:bg-[#494f8c] hover:text-gray-600 peer-checked:text-white hover:bg-gray-50"
      >
        <div class="block">
          <svg
            class="mb-2 w-20 h-20"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 2048 2048"
            ><path
              fill="currentColor"
              d="M1504 393q91 18 167 64t131 112t87 150t31 177q0 101-37 191t-103 160t-153 112t-189 48q-71 106-178 173t-236 81v387H896v-387q-128-14-235-81t-179-173q-101-5-189-47t-153-112t-102-160T0 896q0-93 31-176t86-150t132-113t167-64q29-88 83-160t125-124t157-80T960 0q93 0 178 28t157 81t126 124t83 160m-96 887q79 0 149-30t122-82t83-122t30-150q0-79-30-149t-82-122t-123-83t-149-30h-3q-1 0-3 1q-12-82-51-152t-98-123t-134-81t-159-29q-84 0-159 29t-134 81t-98 122t-51 153h-3q-1 0-3-1q-80 1-150 31t-122 81t-82 122t-30 150q0 80 30 149t82 122t122 83t150 30h45q24 51 59 93t79 75t94 54t107 29v-129q-56-12-103-41t-81-70t-53-94t-19-109h128q0 30 9 58t26 53t40 42t53 28V896h128v373q29-10 52-28t41-42t26-52t9-59h128q0 57-19 109t-53 93t-81 71t-103 41v129q55-8 106-29t95-53t79-75t59-94z"
            ></path></svg
          >
          <div class="w-full text-2xl font-semibold">Cotton</div>
        </div>
      </label>
    </li>
  </ul>
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
  'Mattress Cleaning': `<div
  class="flex justify-between items-center w-full px-5 md:px-20 my-2 pb-5 border-b-4 border-dotted"
>
  <label for="babycot" class="font-semibold text-lg text-muted"
    >Babycot <span class="text-red-500">*</span></label
  >
  <div
    class="h-10 w-28 bg-gray-50 flex border border-gray-200 rounded items-center mt-1"
  >
    <button
      type="button"
      id="decrement-button-babycot"
      data-input-counter="quantity-babycot"
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
      name="babycot"
      maxlength="1"
      min="0"
      value="0"
      oninput="this.value = this.value.replace(/[^0-9]/g, '');"
      type="text"
      id="quantity-babycot"
      class="px-2 text-center appearance-none outline-none text-gray-800 w-full bg-transparent"
      required
    />
    <button
      type="button"
      id="increment-button-babycot"
      data-input-counter="quantity-babycot"
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
  <label for="single_mattress" class="font-semibold text-lg text-muted"
    >Single Mattress <span class="text-red-500">*</span></label
  >
  <div
    class="h-10 w-28 bg-gray-50 flex border border-gray-200 rounded items-center mt-1"
  >
    <button
      type="button"
      id="decrement-button-single_mattress"
      data-input-counter="quantity-single_mattress"
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
      name="single_mattress"
      maxlength="1"
      min="0"
      value="0"
      oninput="this.value = this.value.replace(/[^0-9]/g, '');"
      type="text"
      id="quantity-single_mattress"
      class="px-2 text-center appearance-none outline-none text-gray-800 w-full bg-transparent"
      required
    />
    <button
      type="button"
      id="increment-button-single_mattress"
      data-input-counter="quantity-single_mattress"
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
  <label for="double-mattress" class="font-semibold text-lg text-muted"
    >Double Mattress <span class="text-red-500">*</span></label
  >
  <div
    class="h-10 w-28 bg-gray-50 flex border border-gray-200 rounded items-center mt-1"
  >
    <button
      type="button"
      id="decrement-button-double-mattress"
      data-input-counter="quantity-double-mattress"
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
      name="double-mattress"
      maxlength="1"
      min="0"
      value="0"
      oninput="this.value = this.value.replace(/[^0-9]/g, '');"
      type="text"
      id="quantity-double-mattress"
      class="px-2 text-center appearance-none outline-none text-gray-800 w-full bg-transparent"
      required
    />
    <button
      type="button"
      id="increment-button-double-mattress"
      data-input-counter="quantity-double-mattress"
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
  <label for="queen-size" class="font-semibold text-lg text-muted"
    >Queen size <span class="text-red-500">*</span></label
  >
  <div
    class="h-10 w-28 bg-gray-50 flex border border-gray-200 rounded items-center mt-1"
  >
    <button
      type="button"
      id="decrement-button-queen-size"
      data-input-counter="quantity-queen-size"
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
      name="queen-size"
      maxlength="1"
      min="0"
      value="0"
      oninput="this.value = this.value.replace(/[^0-9]/g, '');"
      type="text"
      id="quantity-queen-size"
      class="px-2 text-center appearance-none outline-none text-gray-800 w-full bg-transparent"
      required
    />
    <button
      type="button"
      id="increment-button-queen-size"
      data-input-counter="quantity-queen-size"
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
  <label for="king-size" class="font-semibold text-lg text-muted"
    >King size <span class="text-red-500">*</span></label
  >
  <div
    class="h-10 w-28 bg-gray-50 flex border border-gray-200 rounded items-center mt-1"
  >
    <button
      type="button"
      id="decrement-button-king-size"
      data-input-counter="quantity-king-size"
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
      name="king-size"
      maxlength="1"
      min="0"
      value="0"
      oninput="this.value = this.value.replace(/[^0-9]/g, '');"
      type="text"
      id="quantity-king-size"
      class="px-2 text-center appearance-none outline-none text-gray-800 w-full bg-transparent"
      required
    />
    <button
      type="button"
      id="increment-button-king-size"
      data-input-counter="quantity-king-size"
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

<div class="flex-row w-full px-2 mt-8 md:px-16 mb-6 md:mb-5">
  <label class="mb-5 text-lg font-medium text-gray-900">
    Would you like to add upholstery cleaning?
  </label>
  <ul class="grid w-full gap-2 md:gap-10 md:grid-cols-3 mt-4">
    <li class="h-full">
      <input
        input-option-checked="dining-chair-section"
        type="checkbox"
        id="dining-chair"
        value="dining chair"
        name="upholstery_options"
        class="hidden peer"
      />
      <label
        for="dining-chair"
        class="inline-flex h-44 items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-[#494f8c] peer-checked:bg-[#494f8c] hover:text-gray-600 peer-checked:text-white hover:bg-gray-50 fill-black peer-checked:fill-white"
      >
        <div
          class="flex flex-col justify-center items-center w-full text-center"
        >
          <svg
            class="mb-1 w-24 h-24"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 60 60"
            ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier">
              <g>
                <path
                  d="M44,27.435v-9.6c1.853-1.894,3-4.482,3-7.334C47,4.71,42.29,0,36.5,0h-13C17.71,0,13,4.71,13,10.5 c0,2.853,1.147,5.44,3,7.334v9.6c-3.14,1.408-5,3.337-5,5.565l0.012,0.241C11.005,33.327,11,33.413,11,33.5 c0,1.953,1.258,3.602,3,4.224V59c0,0.553,0.448,1,1,1s1-0.447,1-1V42h2v15c0,0.553,0.448,1,1,1s1-0.447,1-1V42h20v15 c0,0.553,0.448,1,1,1s1-0.447,1-1V42h2v17c0,0.553,0.448,1,1,1s1-0.447,1-1V37.731c1.593-0.567,2.78-1.997,2.972-3.731L49,33 C49,30.772,47.14,28.843,44,27.435z M23.5,2h13c4.687,0,8.5,3.813,8.5,8.5S41.187,19,36.5,19h-13c-4.687,0-8.5-3.813-8.5-8.5 S18.813,2,23.5,2z M18,19.427C19.602,20.418,21.482,21,23.5,21h13c2.018,0,3.898-0.582,5.5-1.573v7.237 C38.795,25.611,34.674,25,30,25s-8.795,0.611-12,1.664V19.427z M16,40v-2h2v2H16z M20,40v-2h20v2H20z M42,40v-2h2v2H42z M44.5,36 h-29c-1.378,0-2.5-1.121-2.5-2.5c0-0.104,0.018-0.205,0.041-0.356l0.078-0.779C14.004,29.937,19.818,27,30,27 c9.986,0,15.77,2.824,16.824,5.223l0.143,0.972C46.982,33.295,47,33.396,47,33.5C47,34.879,45.878,36,44.5,36z"
                ></path>
                <path
                  d="M42,32H28c-0.552,0-1,0.447-1,1s0.448,1,1,1h14c0.552,0,1-0.447,1-1S42.552,32,42,32z"
                ></path>
                <path
                  d="M22,32h-4c-0.552,0-1,0.447-1,1s0.448,1,1,1h4c0.552,0,1-0.447,1-1S22.553,32,22,32z"
                ></path>
              </g>
            </g></svg
          >
          <div class="w-full text-2xl font-semibold">Dining Chair</div>
        </div>
      </label>
    </li>
    <li class="h-full">
      <input
        input-option-checked="armchair-section"
        type="checkbox"
        id="armchair-option"
        value="armchair"
        name="upholstery_options"
        class="hidden peer"
      />
      <label
        for="armchair-option"
        class="inline-flex h-44 items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-[#494f8c] peer-checked:bg-[#494f8c] hover:text-gray-600 peer-checked:text-white hover:bg-gray-50 fill-black peer-checked:fill-white"
      >
        <div
          class="flex flex-col justify-center items-center w-full text-center"
        >
          <svg
            class="mb-1 w-24 h-24"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 60.008 60.008"
            ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier">
              <g>
                <path
                  d="M19.297,21.211c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293l0.92-0.92 c0.433,0.213,0.901,0.332,1.373,0.332s0.94-0.12,1.373-0.332l0.92,0.92c0.195,0.195,0.451,0.293,0.707,0.293 s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414l-0.919-0.919c0.426-0.866,0.426-1.881,0-2.747l0.919-0.919 c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0l-0.92,0.92c-0.866-0.425-1.88-0.425-2.747,0l-0.92-0.92 c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414l0.92,0.92c-0.426,0.866-0.426,1.88,0,2.747l-0.92,0.92 C18.906,20.187,18.906,20.82,19.297,21.211z M23.797,16.711c0.437,0.438,0.437,1.148,0,1.586c-0.438,0.438-1.148,0.438-1.586,0 c-0.437-0.438-0.437-1.148,0-1.586c0.219-0.219,0.506-0.328,0.793-0.328S23.578,16.492,23.797,16.711z"
                ></path>
                <path
                  d="M35.297,21.211c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293l0.92-0.92 c0.433,0.213,0.901,0.332,1.373,0.332s0.94-0.12,1.373-0.332l0.92,0.92c0.195,0.195,0.451,0.293,0.707,0.293 s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414l-0.919-0.919c0.426-0.866,0.426-1.881,0-2.747l0.919-0.919 c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0l-0.92,0.92c-0.866-0.425-1.88-0.425-2.747,0l-0.92-0.92 c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414l0.92,0.92c-0.426,0.866-0.426,1.88,0,2.747l-0.92,0.92 C34.906,20.187,34.906,20.82,35.297,21.211z M39.797,16.711c0.437,0.438,0.437,1.148,0,1.586c-0.438,0.438-1.148,0.438-1.586,0 c-0.437-0.438-0.437-1.148,0-1.586c0.219-0.219,0.506-0.328,0.793-0.328S39.578,16.492,39.797,16.711z"
                ></path>
                <path
                  d="M59.949,32.28c-0.438-3.935-3.595-7.171-7.508-7.695c-0.78-0.104-1.558-0.092-2.32,0.006l0.901-9.18 c0.561-3.476-0.428-7.007-2.711-9.688c-2.283-2.681-5.612-4.218-9.133-4.218H21.003c-3.521,0-6.851,1.538-9.133,4.218 c-2.283,2.681-3.271,6.212-2.719,9.612l0.769,9.261c-0.773-0.103-1.562-0.117-2.353-0.011c-3.913,0.524-7.071,3.76-7.509,7.695 c-0.3,2.704,0.568,5.328,2.381,7.2c2.944,3.04,4.565,6.785,4.565,10.545v1.052c0,2.337,1.826,4.237,4.123,4.397 c0.439,1.822,2.11,3.031,4.377,3.031c2.253,0,3.916-1.196,4.367-3h20.266c0.451,1.804,2.114,3,4.367,3 c2.277,0,3.956-1.22,4.385-3.057c2.312-0.282,4.115-2.234,4.115-4.62v-0.802c0-3.76,1.621-7.505,4.565-10.545 C59.382,37.607,60.249,34.983,59.949,32.28z M11.969,25.114l-0.835-10.022c-0.467-2.897,0.355-5.839,2.258-8.073 s4.677-3.515,7.611-3.515h18.175c2.935,0,5.708,1.281,7.611,3.515c1.902,2.234,2.725,5.177,2.25,8.135l-0.979,9.952 c-0.023,0.009-0.044,0.02-0.066,0.029c-0.169,0.067-0.333,0.144-0.498,0.221c-0.083,0.039-0.166,0.077-0.247,0.119 c-0.183,0.093-0.362,0.194-0.538,0.3c-0.049,0.03-0.097,0.06-0.145,0.09c-0.196,0.124-0.388,0.253-0.575,0.393 c-0.004,0.003-0.008,0.006-0.012,0.01c-0.174,0.131-0.35,0.259-0.515,0.404c-0.866,0.757-1.562,1.668-2.065,2.674 c-0.627,0.956-1.057,2.03-1.257,3.158H17.866c-0.201-1.128-0.63-2.203-1.257-3.158c-0.504-1.005-1.2-1.917-2.065-2.674 c-0.157-0.137-0.324-0.259-0.49-0.383c-0.01-0.008-0.021-0.016-0.031-0.024c-0.183-0.137-0.371-0.264-0.563-0.386 c-0.053-0.034-0.106-0.067-0.16-0.099c-0.172-0.104-0.346-0.202-0.524-0.294c-0.088-0.046-0.179-0.087-0.269-0.13 c-0.157-0.074-0.314-0.148-0.475-0.213C12.011,25.134,11.991,25.123,11.969,25.114z M16.938,34.504H43.07 c1.618,0,2.934,1.316,2.934,2.934v2.966c0,0.607-0.494,1.101-1.101,1.101H15.105c-0.607,0-1.101-0.494-1.101-1.101v-2.966 C14.004,35.82,15.32,34.504,16.938,34.504z M15.504,56.504c-0.88,0-1.805-0.279-2.242-1h4.483 C17.309,56.225,16.384,56.504,15.504,56.504z M44.504,56.504c-0.88,0-1.805-0.279-2.242-1h4.483 C46.309,56.225,45.384,56.504,44.504,56.504z M56.132,38.088c-3.307,3.416-5.128,7.655-5.128,11.937v0.802 c0,1.476-1.201,2.677-2.678,2.677h-8.322h-20h-8.573c-1.338,0-2.427-1.089-2.427-2.427v-1.052c0-4.283-1.821-8.522-5.128-11.937 c-1.396-1.442-2.063-3.479-1.83-5.587c0.337-3.035,2.771-5.53,5.787-5.934c0.319-0.042,0.636-0.064,0.949-0.064 c0.732,0,1.44,0.133,2.117,0.357c0.145,0.048,0.289,0.097,0.429,0.155c0.249,0.102,0.492,0.22,0.729,0.352 c0.129,0.072,0.254,0.151,0.378,0.232c0.236,0.153,0.467,0.316,0.687,0.501c0.683,0.576,1.253,1.288,1.667,2.095 c0.401,0.786,0.648,1.647,0.721,2.545c-2.021,0.617-3.505,2.478-3.505,4.698v2.966c0,1.709,1.391,3.101,3.101,3.101h29.799 c1.709,0,3.101-1.391,3.101-3.101v-2.966c0-2.221-1.485-4.081-3.506-4.698c0.07-0.889,0.315-1.746,0.714-2.53 c0.836-1.64,2.318-2.883,4.071-3.411l0.217-0.065c0.854-0.225,1.757-0.289,2.677-0.166c3.016,0.403,5.448,2.899,5.785,5.934 C58.195,34.609,57.529,36.646,56.132,38.088z"
                ></path>
              </g>
            </g></svg
          >
          <div class="w-full text-2xl font-semibold">Armchair</div>
        </div>
      </label>
    </li>
    <li class="h-full">
      <input
        input-option-checked="two-seater-section"
        type="checkbox"
        id="two-seater-option"
        value="two seater"
        name="upholstery_options"
        class="hidden peer"
      />
      <label
        for="two-seater-option"
        class="inline-flex h-44 items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-[#494f8c] peer-checked:bg-[#494f8c] hover:text-gray-600 peer-checked:text-white hover:bg-gray-50 fill-black peer-checked:fill-white"
      >
        <div
          class="flex flex-col justify-center items-center w-full text-center"
        >
          <svg
            class="mb-1 w-24 h-24"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 60 60"
            xml:space="preserve"
            ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier">
              <g>
                <path
                  d="M60,32.748V27.83c0-1.27-0.846-2.334-2-2.691V14.433c0-1.189-0.477-2.266-1.242-3.063c-0.02-0.024-0.029-0.055-0.051-0.077 c-0.023-0.023-0.053-0.031-0.078-0.051C55.833,10.477,54.757,10,53.567,10H33.433c-1.189,0-2.265,0.477-3.062,1.242 c-0.024,0.02-0.055,0.029-0.078,0.051c-0.023,0.023-0.031,0.053-0.051,0.077c-0.088,0.091-0.162,0.194-0.242,0.293 c-0.08-0.099-0.154-0.201-0.242-0.293c-0.02-0.024-0.029-0.055-0.051-0.077c-0.023-0.023-0.053-0.031-0.078-0.051 C28.833,10.477,27.757,10,26.567,10H6.433c-1.189,0-2.265,0.477-3.062,1.242c-0.024,0.02-0.055,0.029-0.078,0.051 c-0.023,0.023-0.031,0.053-0.051,0.077C2.477,12.167,2,13.244,2,14.433v10.706c-1.154,0.357-2,1.422-2,2.691v4.917 c0,0.651,0.281,1.233,0.724,1.645C0.276,34.981,0,35.706,0,36.5c0,0.98,0.407,1.864,1.058,2.5C0.407,39.636,0,40.52,0,41.5 C0,43.43,1.57,45,3.5,45H4v4c0,0.552,0.447,1,1,1h3c0.409,0,0.776-0.249,0.929-0.628L10.677,45h38.645l1.749,4.372 C51.224,49.751,51.591,50,52,50h3c0.553,0,1-0.448,1-1v-4h0.5c1.93,0,3.5-1.57,3.5-3.5c0-0.98-0.407-1.864-1.058-2.5 C59.593,38.364,60,37.48,60,36.5c0-0.794-0.276-1.519-0.724-2.108C59.719,33.981,60,33.398,60,32.748z M48.025,32.839 c0.008-0.101,0.018-0.201,0.031-0.3c0.014-0.108,0.03-0.216,0.049-0.322c0.018-0.098,0.037-0.196,0.059-0.292 c0.024-0.104,0.051-0.207,0.08-0.31c0.027-0.095,0.055-0.189,0.086-0.282c0.034-0.101,0.071-0.199,0.109-0.298 c0.035-0.091,0.072-0.181,0.111-0.27c0.043-0.096,0.089-0.19,0.137-0.283c0.044-0.086,0.088-0.172,0.135-0.257 c0.052-0.091,0.107-0.179,0.163-0.268c0.051-0.081,0.102-0.162,0.157-0.24c0.06-0.086,0.124-0.169,0.188-0.251 c0.058-0.075,0.116-0.151,0.178-0.223c0.068-0.08,0.14-0.156,0.212-0.233c0.065-0.069,0.129-0.139,0.196-0.205 c0.075-0.074,0.155-0.143,0.234-0.213c0.071-0.062,0.14-0.126,0.214-0.185c0.083-0.067,0.17-0.129,0.256-0.192 c0.075-0.055,0.149-0.111,0.227-0.162c0.091-0.06,0.185-0.114,0.279-0.17c0.079-0.047,0.157-0.096,0.238-0.139 c0.098-0.052,0.2-0.098,0.301-0.145c0.082-0.038,0.162-0.079,0.245-0.114c0.106-0.044,0.216-0.081,0.325-0.119 c0.083-0.029,0.165-0.062,0.249-0.088c0.115-0.035,0.234-0.062,0.352-0.091c0.082-0.02,0.162-0.044,0.246-0.061 c0.135-0.027,0.273-0.044,0.411-0.063c0.069-0.009,0.137-0.024,0.207-0.031C53.908,27.011,54.12,27,54.335,27h2.835 c0.458,0,0.83,0.373,0.83,0.83v4.917C58,32.887,57.887,33,57.748,33H56.5h-8.483C48.02,32.946,48.021,32.892,48.025,32.839z M53.567,12c0.302,0,0.588,0.062,0.855,0.163l-2.13,2.13c-0.391,0.391-0.391,1.023,0,1.414C52.488,15.902,52.744,16,53,16 s0.512-0.098,0.707-0.293l2.13-2.13C55.938,13.845,56,14.131,56,14.433V25h-1.665c-0.284,0-0.564,0.015-0.84,0.043 c-0.096,0.01-0.188,0.029-0.283,0.042c-0.179,0.024-0.359,0.046-0.535,0.082c-0.107,0.022-0.21,0.053-0.316,0.079 c-0.159,0.039-0.319,0.074-0.474,0.122c-0.11,0.034-0.215,0.077-0.323,0.115c-0.146,0.052-0.293,0.1-0.435,0.159 c-0.108,0.045-0.211,0.099-0.317,0.149c-0.136,0.064-0.273,0.125-0.405,0.195c-0.104,0.056-0.203,0.12-0.304,0.18 c-0.127,0.075-0.255,0.148-0.378,0.23c-0.099,0.066-0.192,0.138-0.287,0.208c-0.118,0.086-0.237,0.17-0.35,0.262 c-0.093,0.075-0.179,0.157-0.268,0.236c-0.108,0.096-0.218,0.19-0.321,0.292c-0.085,0.084-0.165,0.173-0.247,0.261 c-0.098,0.105-0.198,0.209-0.291,0.32c-0.078,0.092-0.149,0.189-0.223,0.284c-0.088,0.114-0.176,0.226-0.258,0.344 c-0.07,0.1-0.133,0.205-0.198,0.308c-0.076,0.121-0.152,0.24-0.222,0.365c-0.06,0.108-0.115,0.219-0.17,0.329 c-0.064,0.127-0.128,0.254-0.185,0.385c-0.05,0.115-0.095,0.232-0.14,0.35c-0.051,0.132-0.102,0.265-0.147,0.4 c-0.04,0.122-0.074,0.245-0.108,0.369c-0.038,0.137-0.075,0.274-0.107,0.413c-0.028,0.128-0.051,0.257-0.073,0.387 c-0.024,0.14-0.047,0.28-0.065,0.423c-0.016,0.134-0.026,0.269-0.036,0.405c-0.006,0.088-0.02,0.174-0.023,0.263H33.433 c-0.302,0-0.588-0.062-0.855-0.163l2.13-2.13c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0l-2.13,2.13 C31.062,31.155,31,30.869,31,30.567V14.433c0-0.302,0.062-0.589,0.163-0.856l2.13,2.13C33.488,15.902,33.744,16,34,16 s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414l-2.13-2.13C32.844,12.062,33.131,12,33.433,12H53.567z M26.567,12 c0.302,0,0.588,0.062,0.855,0.163l-2.13,2.13c-0.391,0.391-0.391,1.023,0,1.414C25.488,15.902,25.744,16,26,16 s0.512-0.098,0.707-0.293l2.13-2.13C28.938,13.845,29,14.131,29,14.433v16.134c0,0.302-0.062,0.589-0.163,0.856l-2.13-2.13 c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414l2.13,2.13C27.156,32.938,26.869,33,26.567,33H13.993 c-0.004-0.089-0.017-0.175-0.023-0.263c-0.01-0.136-0.02-0.271-0.036-0.405c-0.017-0.142-0.04-0.282-0.064-0.422 c-0.023-0.13-0.045-0.26-0.074-0.389c-0.031-0.139-0.068-0.276-0.106-0.412c-0.034-0.124-0.068-0.248-0.108-0.37 c-0.045-0.136-0.095-0.268-0.147-0.4c-0.045-0.117-0.09-0.235-0.14-0.35c-0.057-0.131-0.121-0.257-0.185-0.385 c-0.056-0.111-0.11-0.222-0.17-0.329c-0.07-0.125-0.146-0.245-0.222-0.365c-0.065-0.104-0.128-0.208-0.198-0.308 c-0.082-0.118-0.17-0.231-0.258-0.344c-0.074-0.095-0.145-0.192-0.223-0.284c-0.093-0.11-0.192-0.214-0.291-0.32 c-0.082-0.088-0.161-0.177-0.247-0.261c-0.103-0.101-0.213-0.196-0.321-0.292c-0.089-0.079-0.176-0.16-0.268-0.236 c-0.113-0.092-0.232-0.175-0.349-0.261c-0.096-0.07-0.19-0.143-0.289-0.209c-0.122-0.081-0.25-0.154-0.377-0.229 c-0.102-0.06-0.201-0.124-0.305-0.18c-0.132-0.071-0.269-0.132-0.405-0.195c-0.106-0.05-0.209-0.103-0.317-0.149 c-0.142-0.059-0.289-0.108-0.435-0.159c-0.108-0.038-0.213-0.082-0.323-0.115c-0.155-0.048-0.315-0.083-0.474-0.122 c-0.105-0.026-0.209-0.058-0.316-0.079c-0.175-0.036-0.355-0.058-0.535-0.082c-0.095-0.013-0.187-0.033-0.283-0.042 C6.229,25.015,5.949,25,5.665,25H4V14.433c0-0.302,0.062-0.589,0.163-0.856l2.13,2.13C6.488,15.902,6.744,16,7,16 s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414l-2.13-2.13C5.844,12.062,6.131,12,6.433,12H26.567z M2,27.83 C2,27.373,2.372,27,2.83,27h2.835c0.215,0,0.427,0.011,0.637,0.032c0.07,0.007,0.138,0.021,0.207,0.031 c0.138,0.018,0.276,0.036,0.411,0.063c0.083,0.017,0.164,0.041,0.246,0.061c0.118,0.029,0.237,0.055,0.352,0.091 c0.085,0.026,0.166,0.059,0.249,0.088c0.109,0.039,0.219,0.075,0.325,0.119c0.083,0.035,0.163,0.076,0.245,0.114 c0.101,0.047,0.203,0.093,0.301,0.145c0.081,0.043,0.159,0.092,0.238,0.139c0.094,0.055,0.188,0.11,0.279,0.17 c0.078,0.051,0.151,0.108,0.227,0.162c0.086,0.063,0.173,0.125,0.256,0.192c0.073,0.059,0.143,0.123,0.214,0.185 c0.079,0.07,0.158,0.139,0.234,0.213c0.068,0.066,0.132,0.136,0.196,0.205c0.072,0.077,0.144,0.153,0.212,0.233 c0.062,0.073,0.119,0.148,0.178,0.223c0.064,0.083,0.128,0.165,0.188,0.251c0.055,0.078,0.106,0.159,0.157,0.24 c0.056,0.088,0.111,0.177,0.163,0.268c0.048,0.084,0.092,0.17,0.135,0.257c0.047,0.093,0.094,0.187,0.137,0.283 c0.039,0.089,0.076,0.179,0.111,0.27c0.039,0.098,0.076,0.197,0.109,0.298c0.031,0.093,0.059,0.187,0.086,0.282 c0.029,0.102,0.056,0.205,0.08,0.31c0.022,0.097,0.041,0.194,0.059,0.292c0.019,0.107,0.036,0.214,0.049,0.322 c0.013,0.099,0.023,0.199,0.031,0.3c0.004,0.053,0.005,0.107,0.008,0.161H3.5H2.252C2.113,33,2,32.887,2,32.748V27.83z M7.323,48H6 v-3h2.523L7.323,48z M54,48h-1.323l-1.2-3H54V48z M58,41.5c0,0.827-0.673,1.5-1.5,1.5H55h-5H10H5H3.5C2.673,43,2,42.327,2,41.5 S2.673,40,3.5,40h53C57.327,40,58,40.673,58,41.5z M3.5,38C2.673,38,2,37.327,2,36.5S2.673,35,3.5,35h8.835h14.232h6.865h14.232 H56.5c0.827,0,1.5,0.673,1.5,1.5S57.327,38,56.5,38H3.5z"
                ></path>
                <path
                  d="M13.293,23.707C13.488,23.902,13.744,24,14,24s0.512-0.098,0.707-0.293L16,22.414l1.293,1.293 C17.488,23.902,17.744,24,18,24s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414L17.414,21l1.293-1.293 c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0L16,19.586l-1.293-1.293c-0.391-0.391-1.023-0.391-1.414,0 s-0.391,1.023,0,1.414L14.586,21l-1.293,1.293C12.902,22.684,12.902,23.316,13.293,23.707z"
                ></path>
                <path
                  d="M41.293,23.707C41.488,23.902,41.744,24,42,24s0.512-0.098,0.707-0.293L44,22.414l1.293,1.293 C45.488,23.902,45.744,24,46,24s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414L45.414,21l1.293-1.293 c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0L44,19.586l-1.293-1.293c-0.391-0.391-1.023-0.391-1.414,0 s-0.391,1.023,0,1.414L42.586,21l-1.293,1.293C40.902,22.684,40.902,23.316,41.293,23.707z"
                ></path>
              </g>
            </g></svg
          >

          <div class="w-full text-2xl font-semibold">Two seater</div>
        </div>
      </label>
    </li>
    <li class="h-full">
      <input
        input-option-checked="three-seater-section"
        type="checkbox"
        id="three-seater-option"
        value="three seater"
        name="upholstery_options"
        class="hidden peer"
      />
      <label
        for="three-seater-option"
        class="inline-flex h-44 items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-[#494f8c] peer-checked:bg-[#494f8c] hover:text-gray-600 peer-checked:text-white hover:bg-gray-50 fill-black peer-checked:fill-white"
      >
        <div
          class="flex flex-col justify-center items-center w-full text-center"
        >
          <svg
            class="mb-1 w-24 h-24"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 60 60"
            xml:space="preserve"
            ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier">
              <g>
                <path
                  d="M60,26c0-1.474-0.81-2.75-2-3.444v-3.06C58,14.812,54.188,11,49.503,11h-5.675c-1.773,0-3.456,0.585-4.828,1.665 C37.628,11.585,35.945,11,34.172,11h-8.344c-1.773,0-3.456,0.585-4.828,1.665C19.628,11.585,17.945,11,16.172,11h-5.675 C5.812,11,2,14.812,2,19.497v3.06C0.81,23.25,0,24.526,0,26v20h1v3h6v-3h1h44h1v3h6v-3h1V26z M8,32h10.172 c0.263,0,0.521,0.107,0.707,0.293c1.169,1.167,3.071,1.169,4.242,0C23.308,32.107,23.565,32,23.828,32h12.344 c0.263,0,0.521,0.107,0.707,0.293c1.17,1.168,3.072,1.168,4.242,0v0C41.308,32.107,41.565,32,41.828,32H52v3H8V32z M54,37v-2v-5 v-3.7c0-0.915,0.482-1.743,1.229-2.109c0.203-0.099,0.402-0.152,0.603-0.174c0.043-0.004,0.085-0.012,0.129-0.013 c0.071-0.002,0.143,0.006,0.216,0.014c0.045,0.004,0.09,0.007,0.134,0.014c0.115,0.021,0.232,0.051,0.354,0.095l0.158,0.056 C57.515,24.497,58,25.191,58,26v18h-4V37z M49.503,13C53.085,13,56,15.915,56,19.497V22c-2.206,0-4,1.794-4,4v0.3V30H41.828 c-0.673,0-1.305,0.232-1.828,0.638V14.441C41.062,13.513,42.404,13,43.828,13H49.503z M34.172,13c1.424,0,2.767,0.513,3.828,1.441 v16.197C37.477,30.231,36.845,30,36.172,30H23.828c-0.673,0-1.305,0.232-1.828,0.638V14.441C23.062,13.513,24.404,13,25.828,13 H34.172z M4,19.497C4,15.915,6.915,13,10.497,13h5.675c1.424,0,2.767,0.513,3.828,1.441v16.197C19.477,30.231,18.845,30,18.172,30 H8v-3.7V26c0-2.206-1.794-4-4-4V19.497z M2,26c0-0.809,0.485-1.503,1.177-1.818l0.158-0.056c0.122-0.044,0.239-0.074,0.354-0.094 c0.045-0.007,0.091-0.01,0.137-0.014c0.072-0.007,0.143-0.015,0.214-0.014c0.045,0.001,0.087,0.01,0.131,0.013 c0.201,0.022,0.399,0.074,0.6,0.173C5.518,24.557,6,25.385,6,26.3V30v5v2v7H2V26z M5,47H3v-1h2V47z M52,44H8v-7h44V44z M57,47h-2 v-1h2V47z"
                ></path>
                <path
                  d="M27.293,22.707C27.488,22.902,27.744,23,28,23s0.512-0.098,0.707-0.293L30,21.414l1.293,1.293 C31.488,22.902,31.744,23,32,23s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414L31.414,20l1.293-1.293 c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0L30,18.586l-1.293-1.293c-0.391-0.391-1.023-0.391-1.414,0 s-0.391,1.023,0,1.414L28.586,20l-1.293,1.293C26.902,21.684,26.902,22.316,27.293,22.707z"
                ></path>
                <path
                  d="M45.293,22.707C45.488,22.902,45.744,23,46,23s0.512-0.098,0.707-0.293L48,21.414l1.293,1.293 C49.488,22.902,49.744,23,50,23s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414L49.414,20l1.293-1.293 c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0L48,18.586l-1.293-1.293c-0.391-0.391-1.023-0.391-1.414,0 s-0.391,1.023,0,1.414L46.586,20l-1.293,1.293C44.902,21.684,44.902,22.316,45.293,22.707z"
                ></path>
                <path
                  d="M9.293,22.707C9.488,22.902,9.744,23,10,23s0.512-0.098,0.707-0.293L12,21.414l1.293,1.293C13.488,22.902,13.744,23,14,23 s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414L13.414,20l1.293-1.293c0.391-0.391,0.391-1.023,0-1.414 s-1.023-0.391-1.414,0L12,18.586l-1.293-1.293c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414L10.586,20l-1.293,1.293 C8.902,21.684,8.902,22.316,9.293,22.707z"
                ></path>
              </g>
            </g></svg
          >
          <div class="w-full text-2xl font-semibold">Three seater</div>
        </div>
      </label>
    </li>
    <li class="h-full">
      <input
        input-option-checked="four-seater-section"
        type="checkbox"
        id="four-seater-option"
        value="Four seater"
        name="upholstery_options"
        class="hidden peer"
      />
      <label
        for="four-seater-option"
        class="inline-flex h-44 items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-[#494f8c] peer-checked:bg-[#494f8c] hover:text-gray-600 peer-checked:text-white hover:bg-gray-50 fill-black peer-checked:fill-white"
      >
        <div
          class="flex flex-col justify-center items-center w-full text-center"
        >
          <svg
            class="mb-1 h-24 w-24"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 495 495"
            xml:space="preserve"
            ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier">
              <path
                d="M403.5,24h-8c-2.997,0-5.862,0.57-8.5,1.598V23.5C387,10.542,376.458,0,363.5,0h-96C254.542,0,244,10.542,244,23.5v8V312 H99.5h-8C78.542,312,68,322.542,68,335.5v96c0,12.958,10.542,23.5,23.5,23.5h8c0.721,0,1.433-0.038,2.138-0.102 c-1.053,2.666-1.638,5.566-1.638,8.602v8c0,12.958,10.542,23.5,23.5,23.5h248c30.603,0,55.5-24.897,55.5-55.5v-392 C427,34.542,416.458,24,403.5,24z M334.606,456l-41-41h18.787l41,41H334.606z M235,440v-16.498c0-0.002,0-0.005,0-0.008 c-0.003-12.954-10.541-23.492-23.495-23.495c-0.002,0-0.005,0-0.008,0h-39.995c-0.001,0-0.003,0-0.005,0H155.5 c-12.958,0-23.5,10.542-23.5,23.5V440h-8.5c-0.721,0-1.433,0.038-2.138,0.102c1.053-2.666,1.638-5.566,1.638-8.602v-96 c0-2.997-0.57-5.862-1.597-8.5H244v113H235z M190.606,456l-37.803-37.803c-0.681-0.681-1.463-1.197-2.295-1.562 c1.404-1.023,3.126-1.635,4.992-1.635h12.894l41,41H190.606z M147,433.606L169.393,456H155.5c-4.687,0-8.5-3.813-8.5-8.5V433.606z M208.393,415L220,426.606v18.787L189.606,415H208.393z M347,92.394V87.5c0-3.753,2.448-6.941,5.829-8.064L388,114.607v18.787 L347,92.394z M355.502,64c-0.003,0-0.006,0-0.009,0C342.539,64.004,332,74.544,332,87.5v7.987c0,0.008,0,0.017,0,0.025v39.975 c0,0.008,0,0.017,0,0.025v7.987c0,12.958,10.542,23.5,23.5,23.5H372v8.999H259V53.402c2.638,1.028,5.503,1.598,8.5,1.598h96 c2.997,0,5.862-0.57,8.5-1.598V64H355.502z M259,190.999h113V200h-16.498c-0.003,0-0.006,0-0.009,0 C342.539,200.004,332,210.544,332,223.5v7.987c0,0.008,0,0.017,0,0.025v39.975c0,0.008,0,0.017,0,0.025v7.987 c0,12.958,10.542,23.5,23.5,23.5H372v9H259V190.999z M347,228.394V223.5c0-3.753,2.448-6.941,5.829-8.064L388,250.607v18.787 L347,228.394z M259,327h113v9h-0.498c-0.002,0-0.003,0-0.005,0H355.5c-12.958,0-23.5,10.542-23.5,23.5v31.987 c0,0.008,0,0.017,0,0.025V400h-16.498c-0.002,0-0.003,0-0.005,0H291.5c-12.958,0-23.5,10.542-23.5,23.5V440h-9V327z M388,389.394 l-35.197-35.197c-0.681-0.681-1.463-1.197-2.295-1.562c1.404-1.023,3.126-1.635,4.992-1.635h12.893L388,370.607V389.394z M347,388.394v-18.787l41,41v18.787L347,388.394z M294.606,456L283,444.394v-18.787L313.393,456H294.606z M374.344,455.737 L333.606,415h5.894c3.497,0,6.427-2.397,7.257-5.636l35.439,35.439c1.141,1.141,2.559,1.832,4.037,2.083 C383.927,451.468,379.556,454.826,374.344,455.737z M379.5,288h-12.894L347,268.394v-18.787l35.196,35.196 c0.681,0.681,1.463,1.197,2.296,1.562C383.089,287.388,381.366,288,379.5,288z M388,229.394L373.606,215h5.894 c4.687,0,8.5,3.813,8.5,8.5V229.394z M379.5,152h-12.894L347,132.394v-18.787l35.196,35.196c0.681,0.681,1.463,1.197,2.296,1.562 C383.089,151.388,381.366,152,379.5,152z M388,93.394L373.606,79h5.894c4.687,0,8.5,3.813,8.5,8.5V93.394z M267.5,15h96 c4.687,0,8.5,3.813,8.5,8.5v8c0,4.687-3.813,8.5-8.5,8.5h-96c-4.687,0-8.5-3.813-8.5-8.5v-8C259,18.813,262.813,15,267.5,15z M91.5,440c-4.687,0-8.5-3.813-8.5-8.5v-96c0-4.687,3.813-8.5,8.5-8.5h8c4.687,0,8.5,3.813,8.5,8.5v96c0,4.687-3.813,8.5-8.5,8.5 H91.5z M412,439.5c0,22.332-18.168,40.5-40.5,40.5h-248c-4.687,0-8.5-3.813-8.5-8.5v-8c0-4.687,3.813-8.5,8.5-8.5h9.734 c3.138,9.29,11.93,16,22.266,16h56c10.336,0,19.128-6.71,22.266-16h35.469c3.138,9.29,11.93,16,22.266,16h80 c17.369,0,31.5-14.131,31.5-31.5v-80c0-10.335-6.71-19.127-16-22.266v-35.469c9.29-3.138,16-11.93,16-22.266v-56 c0-10.335-6.71-19.127-16-22.266v-35.469c9.29-3.138,16-11.93,16-22.266v-56c0-10.335-6.71-19.127-16-22.266V47.5 c0-4.687,3.813-8.5,8.5-8.5h8c4.687,0,8.5,3.813,8.5,8.5V439.5z"
              ></path>
            </g></svg
          >
          <div class="w-full text-2xl font-semibold">Four seater</div>
        </div>
      </label>
    </li>
  </ul>
</div>

<div id="dining-chair-section" class="hidden w-full">
  <div
    class="flex justify-between items-center w-full px-2 md:px-16 mb-6 md:mb-5"
  >
    <label for="dining_chairs-count" class="font-semibold text-lg text-muted"
      >How many dining chairs? <span class="text-red-500">*</span
      ></label
    >
    <div
      class="h-10 w-28 bg-gray-50 flex border border-gray-200 rounded items-center mt-1"
    >
      <button
        type="button"
        id="decrement-button-dining_chairs-count"
        data-input-counter="quantity-dining_chairs-count"
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
        name="dining_chairs_count"
        maxlength="1"
        min="1"
        type="text"
        id="quantity-dining_chairs-count"
        class="px-2 text-center appearance-none outline-none text-gray-800 w-full bg-transparent"
        value="1"
        oninput="this.value = this.value.replace(/[^1-9]/g, '');"
        disabled
        required
      />
      <button
        type="button"
        id="increment-button-dining_chairs-count"
        data-input-counter="quantity-dining_chairs-count"
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

<div id="armchair-section" class="hidden w-full">
  <div
    class="flex justify-between items-center w-full px-2 md:px-16 mb-6 md:mb-5"
  >
    <label for="armchair-count" class="font-semibold text-lg text-muted"
      >How many armchairs? <span class="text-red-500">*</span
      ></label
    >
    <div
      class="h-10 w-28 bg-gray-50 flex border border-gray-200 rounded items-center mt-1"
    >
      <button
        type="button"
        id="decrement-button-armchair-count"
        data-input-counter="quantity-armchair-count"
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
        name="armchair_count"
        maxlength="1"
        min="1"
        type="text"
        id="quantity-armchair-count"
        class="px-2 text-center appearance-none outline-none text-gray-800 w-full bg-transparent"
        value="1"
        oninput="this.value = this.value.replace(/[^1-9]/g, '');"
        disabled
        required
      />
      <button
        type="button"
        id="increment-button-armchair-count"
        data-input-counter="quantity-armchair-count"
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

<div id="two-seater-section" class="hidden w-full">
  <div
    class="flex justify-between items-center w-full px-2 md:px-16 mb-6 md:mb-5"
  >
    <label for="two_seater-count" class="font-semibold text-lg text-muted"
      >How many 2 seater sofas? <span class="text-red-500">*</span
      ></label
    >
    <div
      class="h-10 w-28 bg-gray-50 flex border border-gray-200 rounded items-center mt-1"
    >
      <button
        type="button"
        id="decrement-button-two_seater-count"
        data-input-counter="quantity-two_seater-count"
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
        name="two_seater_count"
        maxlength="1"
        min="1"
        type="text"
        id="quantity-two_seater-count"
        class="px-2 text-center appearance-none outline-none text-gray-800 w-full bg-transparent"
        value="1"
        oninput="this.value = this.value.replace(/[^1-9]/g, '');"
        disabled
        required
      />
      <button
        type="button"
        id="increment-button-two_seater-count"
        data-input-counter="quantity-two_seater-count"
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

<div id="three-seater-section" class="hidden w-full">
  <div
    class="flex justify-between items-center w-full px-2 md:px-16 mb-6 md:mb-5"
  >
    <label for="three_seater-count" class="font-semibold text-lg text-muted"
      >How many 3 seater sofas? <span class="text-red-500">*</span
      ></label
    >
    <div
      class="h-10 w-28 bg-gray-50 flex border border-gray-200 rounded items-center mt-1"
    >
      <button
        type="button"
        id="decrement-button-three_seater-count"
        data-input-counter="quantity-three_seater-count"
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
        name="three_seater_count"
        maxlength="1"
        min="1"
        type="text"
        id="quantity-three_seater-count"
        class="px-2 text-center appearance-none outline-none text-gray-800 w-full bg-transparent"
        value="1"
        oninput="this.value = this.value.replace(/[^1-9]/g, '');"
        disabled
        required
      />
      <button
        type="button"
        id="increment-button-three_seater-count"
        data-input-counter="quantity-three_seater-count"
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

<div id="four-seater-section" class="hidden w-full">
  <div
    class="flex justify-between items-center w-full px-2 md:px-16 mb-6 md:mb-5"
  >
    <label for="four_seater-count" class="font-semibold text-lg text-muted"
      >How many 4 seater sofas?<span class="text-red-500">*</span
      ></label
    >
    <div
      class="h-10 w-28 bg-gray-50 flex border border-gray-200 rounded items-center mt-1"
    >
      <button
        type="button"
        id="decrement-button-four_seater-count"
        data-input-counter="quantity-four_seater-count"
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
        name="four_seater_count"
        maxlength="1"
        min="1"
        type="text"
        id="quantity-four_seater-count"
        class="px-2 text-center appearance-none outline-none text-gray-800 w-full bg-transparent"
        value="1"
        oninput="this.value = this.value.replace(/[^1-9]/g, '');"
        disabled
        required
      />
      <button
        type="button"
        id="increment-button-four_seater-count"
        data-input-counter="quantity-four_seater-count"
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
  'Upholstery Cleaning': ` <div class="flex-row w-full px-2 mt-8 md:px-16 mb-6 md:mb-5">
  <label class="mb-5 text-lg font-medium text-gray-900">
    What kind of Sofas/Chairs would you like cleaned? <span
      class="text-red-500">*</span
    >
  </label>
  <ul class="grid w-full gap-2 md:gap-10 md:grid-cols-3 mt-4">
    <li class="h-full">
      <input
        input-option-checked="dining-chair-section"
        type="checkbox"
        id="dining-chair"
        value="dining chair"
        name="upholstery_options"
        class="hidden peer"
      />
      <label
        for="dining-chair"
        class="inline-flex h-44 items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-[#494f8c] peer-checked:bg-[#494f8c] hover:text-gray-600 peer-checked:text-white hover:bg-gray-50 fill-black peer-checked:fill-white"
      >
        <div
          class="flex flex-col justify-center items-center w-full text-center"
        >
          <svg
            class="mb-1 w-24 h-24"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 60 60"
            ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier">
              <g>
                <path
                  d="M44,27.435v-9.6c1.853-1.894,3-4.482,3-7.334C47,4.71,42.29,0,36.5,0h-13C17.71,0,13,4.71,13,10.5 c0,2.853,1.147,5.44,3,7.334v9.6c-3.14,1.408-5,3.337-5,5.565l0.012,0.241C11.005,33.327,11,33.413,11,33.5 c0,1.953,1.258,3.602,3,4.224V59c0,0.553,0.448,1,1,1s1-0.447,1-1V42h2v15c0,0.553,0.448,1,1,1s1-0.447,1-1V42h20v15 c0,0.553,0.448,1,1,1s1-0.447,1-1V42h2v17c0,0.553,0.448,1,1,1s1-0.447,1-1V37.731c1.593-0.567,2.78-1.997,2.972-3.731L49,33 C49,30.772,47.14,28.843,44,27.435z M23.5,2h13c4.687,0,8.5,3.813,8.5,8.5S41.187,19,36.5,19h-13c-4.687,0-8.5-3.813-8.5-8.5 S18.813,2,23.5,2z M18,19.427C19.602,20.418,21.482,21,23.5,21h13c2.018,0,3.898-0.582,5.5-1.573v7.237 C38.795,25.611,34.674,25,30,25s-8.795,0.611-12,1.664V19.427z M16,40v-2h2v2H16z M20,40v-2h20v2H20z M42,40v-2h2v2H42z M44.5,36 h-29c-1.378,0-2.5-1.121-2.5-2.5c0-0.104,0.018-0.205,0.041-0.356l0.078-0.779C14.004,29.937,19.818,27,30,27 c9.986,0,15.77,2.824,16.824,5.223l0.143,0.972C46.982,33.295,47,33.396,47,33.5C47,34.879,45.878,36,44.5,36z"
                ></path>
                <path
                  d="M42,32H28c-0.552,0-1,0.447-1,1s0.448,1,1,1h14c0.552,0,1-0.447,1-1S42.552,32,42,32z"
                ></path>
                <path
                  d="M22,32h-4c-0.552,0-1,0.447-1,1s0.448,1,1,1h4c0.552,0,1-0.447,1-1S22.553,32,22,32z"
                ></path>
              </g>
            </g></svg
          >
          <div class="w-full text-2xl font-semibold">Dining Chair</div>
        </div>
      </label>
    </li>
    <li class="h-full">
      <input
        input-option-checked="armchair-section"
        type="checkbox"
        id="armchair-option"
        value="armchair"
        name="upholstery_options"
        class="hidden peer"
      />
      <label
        for="armchair-option"
        class="inline-flex h-44 items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-[#494f8c] peer-checked:bg-[#494f8c] hover:text-gray-600 peer-checked:text-white hover:bg-gray-50 fill-black peer-checked:fill-white"
      >
        <div
          class="flex flex-col justify-center items-center w-full text-center"
        >
          <svg
            class="mb-1 w-24 h-24"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 60.008 60.008"
            ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier">
              <g>
                <path
                  d="M19.297,21.211c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293l0.92-0.92 c0.433,0.213,0.901,0.332,1.373,0.332s0.94-0.12,1.373-0.332l0.92,0.92c0.195,0.195,0.451,0.293,0.707,0.293 s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414l-0.919-0.919c0.426-0.866,0.426-1.881,0-2.747l0.919-0.919 c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0l-0.92,0.92c-0.866-0.425-1.88-0.425-2.747,0l-0.92-0.92 c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414l0.92,0.92c-0.426,0.866-0.426,1.88,0,2.747l-0.92,0.92 C18.906,20.187,18.906,20.82,19.297,21.211z M23.797,16.711c0.437,0.438,0.437,1.148,0,1.586c-0.438,0.438-1.148,0.438-1.586,0 c-0.437-0.438-0.437-1.148,0-1.586c0.219-0.219,0.506-0.328,0.793-0.328S23.578,16.492,23.797,16.711z"
                ></path>
                <path
                  d="M35.297,21.211c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293l0.92-0.92 c0.433,0.213,0.901,0.332,1.373,0.332s0.94-0.12,1.373-0.332l0.92,0.92c0.195,0.195,0.451,0.293,0.707,0.293 s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414l-0.919-0.919c0.426-0.866,0.426-1.881,0-2.747l0.919-0.919 c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0l-0.92,0.92c-0.866-0.425-1.88-0.425-2.747,0l-0.92-0.92 c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414l0.92,0.92c-0.426,0.866-0.426,1.88,0,2.747l-0.92,0.92 C34.906,20.187,34.906,20.82,35.297,21.211z M39.797,16.711c0.437,0.438,0.437,1.148,0,1.586c-0.438,0.438-1.148,0.438-1.586,0 c-0.437-0.438-0.437-1.148,0-1.586c0.219-0.219,0.506-0.328,0.793-0.328S39.578,16.492,39.797,16.711z"
                ></path>
                <path
                  d="M59.949,32.28c-0.438-3.935-3.595-7.171-7.508-7.695c-0.78-0.104-1.558-0.092-2.32,0.006l0.901-9.18 c0.561-3.476-0.428-7.007-2.711-9.688c-2.283-2.681-5.612-4.218-9.133-4.218H21.003c-3.521,0-6.851,1.538-9.133,4.218 c-2.283,2.681-3.271,6.212-2.719,9.612l0.769,9.261c-0.773-0.103-1.562-0.117-2.353-0.011c-3.913,0.524-7.071,3.76-7.509,7.695 c-0.3,2.704,0.568,5.328,2.381,7.2c2.944,3.04,4.565,6.785,4.565,10.545v1.052c0,2.337,1.826,4.237,4.123,4.397 c0.439,1.822,2.11,3.031,4.377,3.031c2.253,0,3.916-1.196,4.367-3h20.266c0.451,1.804,2.114,3,4.367,3 c2.277,0,3.956-1.22,4.385-3.057c2.312-0.282,4.115-2.234,4.115-4.62v-0.802c0-3.76,1.621-7.505,4.565-10.545 C59.382,37.607,60.249,34.983,59.949,32.28z M11.969,25.114l-0.835-10.022c-0.467-2.897,0.355-5.839,2.258-8.073 s4.677-3.515,7.611-3.515h18.175c2.935,0,5.708,1.281,7.611,3.515c1.902,2.234,2.725,5.177,2.25,8.135l-0.979,9.952 c-0.023,0.009-0.044,0.02-0.066,0.029c-0.169,0.067-0.333,0.144-0.498,0.221c-0.083,0.039-0.166,0.077-0.247,0.119 c-0.183,0.093-0.362,0.194-0.538,0.3c-0.049,0.03-0.097,0.06-0.145,0.09c-0.196,0.124-0.388,0.253-0.575,0.393 c-0.004,0.003-0.008,0.006-0.012,0.01c-0.174,0.131-0.35,0.259-0.515,0.404c-0.866,0.757-1.562,1.668-2.065,2.674 c-0.627,0.956-1.057,2.03-1.257,3.158H17.866c-0.201-1.128-0.63-2.203-1.257-3.158c-0.504-1.005-1.2-1.917-2.065-2.674 c-0.157-0.137-0.324-0.259-0.49-0.383c-0.01-0.008-0.021-0.016-0.031-0.024c-0.183-0.137-0.371-0.264-0.563-0.386 c-0.053-0.034-0.106-0.067-0.16-0.099c-0.172-0.104-0.346-0.202-0.524-0.294c-0.088-0.046-0.179-0.087-0.269-0.13 c-0.157-0.074-0.314-0.148-0.475-0.213C12.011,25.134,11.991,25.123,11.969,25.114z M16.938,34.504H43.07 c1.618,0,2.934,1.316,2.934,2.934v2.966c0,0.607-0.494,1.101-1.101,1.101H15.105c-0.607,0-1.101-0.494-1.101-1.101v-2.966 C14.004,35.82,15.32,34.504,16.938,34.504z M15.504,56.504c-0.88,0-1.805-0.279-2.242-1h4.483 C17.309,56.225,16.384,56.504,15.504,56.504z M44.504,56.504c-0.88,0-1.805-0.279-2.242-1h4.483 C46.309,56.225,45.384,56.504,44.504,56.504z M56.132,38.088c-3.307,3.416-5.128,7.655-5.128,11.937v0.802 c0,1.476-1.201,2.677-2.678,2.677h-8.322h-20h-8.573c-1.338,0-2.427-1.089-2.427-2.427v-1.052c0-4.283-1.821-8.522-5.128-11.937 c-1.396-1.442-2.063-3.479-1.83-5.587c0.337-3.035,2.771-5.53,5.787-5.934c0.319-0.042,0.636-0.064,0.949-0.064 c0.732,0,1.44,0.133,2.117,0.357c0.145,0.048,0.289,0.097,0.429,0.155c0.249,0.102,0.492,0.22,0.729,0.352 c0.129,0.072,0.254,0.151,0.378,0.232c0.236,0.153,0.467,0.316,0.687,0.501c0.683,0.576,1.253,1.288,1.667,2.095 c0.401,0.786,0.648,1.647,0.721,2.545c-2.021,0.617-3.505,2.478-3.505,4.698v2.966c0,1.709,1.391,3.101,3.101,3.101h29.799 c1.709,0,3.101-1.391,3.101-3.101v-2.966c0-2.221-1.485-4.081-3.506-4.698c0.07-0.889,0.315-1.746,0.714-2.53 c0.836-1.64,2.318-2.883,4.071-3.411l0.217-0.065c0.854-0.225,1.757-0.289,2.677-0.166c3.016,0.403,5.448,2.899,5.785,5.934 C58.195,34.609,57.529,36.646,56.132,38.088z"
                ></path>
              </g>
            </g></svg
          >
          <div class="w-full text-2xl font-semibold">Armchair</div>
        </div>
      </label>
    </li>
    <li class="h-full">
      <input
        input-option-checked="two-seater-section"
        type="checkbox"
        id="two-seater-option"
        value="two seater"
        name="upholstery_options"
        class="hidden peer"
      />
      <label
        for="two-seater-option"
        class="inline-flex h-44 items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-[#494f8c] peer-checked:bg-[#494f8c] hover:text-gray-600 peer-checked:text-white hover:bg-gray-50 fill-black peer-checked:fill-white"
      >
        <div
          class="flex flex-col justify-center items-center w-full text-center"
        >
          <svg
            class="mb-1 w-24 h-24"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 60 60"
            xml:space="preserve"
            ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier">
              <g>
                <path
                  d="M60,32.748V27.83c0-1.27-0.846-2.334-2-2.691V14.433c0-1.189-0.477-2.266-1.242-3.063c-0.02-0.024-0.029-0.055-0.051-0.077 c-0.023-0.023-0.053-0.031-0.078-0.051C55.833,10.477,54.757,10,53.567,10H33.433c-1.189,0-2.265,0.477-3.062,1.242 c-0.024,0.02-0.055,0.029-0.078,0.051c-0.023,0.023-0.031,0.053-0.051,0.077c-0.088,0.091-0.162,0.194-0.242,0.293 c-0.08-0.099-0.154-0.201-0.242-0.293c-0.02-0.024-0.029-0.055-0.051-0.077c-0.023-0.023-0.053-0.031-0.078-0.051 C28.833,10.477,27.757,10,26.567,10H6.433c-1.189,0-2.265,0.477-3.062,1.242c-0.024,0.02-0.055,0.029-0.078,0.051 c-0.023,0.023-0.031,0.053-0.051,0.077C2.477,12.167,2,13.244,2,14.433v10.706c-1.154,0.357-2,1.422-2,2.691v4.917 c0,0.651,0.281,1.233,0.724,1.645C0.276,34.981,0,35.706,0,36.5c0,0.98,0.407,1.864,1.058,2.5C0.407,39.636,0,40.52,0,41.5 C0,43.43,1.57,45,3.5,45H4v4c0,0.552,0.447,1,1,1h3c0.409,0,0.776-0.249,0.929-0.628L10.677,45h38.645l1.749,4.372 C51.224,49.751,51.591,50,52,50h3c0.553,0,1-0.448,1-1v-4h0.5c1.93,0,3.5-1.57,3.5-3.5c0-0.98-0.407-1.864-1.058-2.5 C59.593,38.364,60,37.48,60,36.5c0-0.794-0.276-1.519-0.724-2.108C59.719,33.981,60,33.398,60,32.748z M48.025,32.839 c0.008-0.101,0.018-0.201,0.031-0.3c0.014-0.108,0.03-0.216,0.049-0.322c0.018-0.098,0.037-0.196,0.059-0.292 c0.024-0.104,0.051-0.207,0.08-0.31c0.027-0.095,0.055-0.189,0.086-0.282c0.034-0.101,0.071-0.199,0.109-0.298 c0.035-0.091,0.072-0.181,0.111-0.27c0.043-0.096,0.089-0.19,0.137-0.283c0.044-0.086,0.088-0.172,0.135-0.257 c0.052-0.091,0.107-0.179,0.163-0.268c0.051-0.081,0.102-0.162,0.157-0.24c0.06-0.086,0.124-0.169,0.188-0.251 c0.058-0.075,0.116-0.151,0.178-0.223c0.068-0.08,0.14-0.156,0.212-0.233c0.065-0.069,0.129-0.139,0.196-0.205 c0.075-0.074,0.155-0.143,0.234-0.213c0.071-0.062,0.14-0.126,0.214-0.185c0.083-0.067,0.17-0.129,0.256-0.192 c0.075-0.055,0.149-0.111,0.227-0.162c0.091-0.06,0.185-0.114,0.279-0.17c0.079-0.047,0.157-0.096,0.238-0.139 c0.098-0.052,0.2-0.098,0.301-0.145c0.082-0.038,0.162-0.079,0.245-0.114c0.106-0.044,0.216-0.081,0.325-0.119 c0.083-0.029,0.165-0.062,0.249-0.088c0.115-0.035,0.234-0.062,0.352-0.091c0.082-0.02,0.162-0.044,0.246-0.061 c0.135-0.027,0.273-0.044,0.411-0.063c0.069-0.009,0.137-0.024,0.207-0.031C53.908,27.011,54.12,27,54.335,27h2.835 c0.458,0,0.83,0.373,0.83,0.83v4.917C58,32.887,57.887,33,57.748,33H56.5h-8.483C48.02,32.946,48.021,32.892,48.025,32.839z M53.567,12c0.302,0,0.588,0.062,0.855,0.163l-2.13,2.13c-0.391,0.391-0.391,1.023,0,1.414C52.488,15.902,52.744,16,53,16 s0.512-0.098,0.707-0.293l2.13-2.13C55.938,13.845,56,14.131,56,14.433V25h-1.665c-0.284,0-0.564,0.015-0.84,0.043 c-0.096,0.01-0.188,0.029-0.283,0.042c-0.179,0.024-0.359,0.046-0.535,0.082c-0.107,0.022-0.21,0.053-0.316,0.079 c-0.159,0.039-0.319,0.074-0.474,0.122c-0.11,0.034-0.215,0.077-0.323,0.115c-0.146,0.052-0.293,0.1-0.435,0.159 c-0.108,0.045-0.211,0.099-0.317,0.149c-0.136,0.064-0.273,0.125-0.405,0.195c-0.104,0.056-0.203,0.12-0.304,0.18 c-0.127,0.075-0.255,0.148-0.378,0.23c-0.099,0.066-0.192,0.138-0.287,0.208c-0.118,0.086-0.237,0.17-0.35,0.262 c-0.093,0.075-0.179,0.157-0.268,0.236c-0.108,0.096-0.218,0.19-0.321,0.292c-0.085,0.084-0.165,0.173-0.247,0.261 c-0.098,0.105-0.198,0.209-0.291,0.32c-0.078,0.092-0.149,0.189-0.223,0.284c-0.088,0.114-0.176,0.226-0.258,0.344 c-0.07,0.1-0.133,0.205-0.198,0.308c-0.076,0.121-0.152,0.24-0.222,0.365c-0.06,0.108-0.115,0.219-0.17,0.329 c-0.064,0.127-0.128,0.254-0.185,0.385c-0.05,0.115-0.095,0.232-0.14,0.35c-0.051,0.132-0.102,0.265-0.147,0.4 c-0.04,0.122-0.074,0.245-0.108,0.369c-0.038,0.137-0.075,0.274-0.107,0.413c-0.028,0.128-0.051,0.257-0.073,0.387 c-0.024,0.14-0.047,0.28-0.065,0.423c-0.016,0.134-0.026,0.269-0.036,0.405c-0.006,0.088-0.02,0.174-0.023,0.263H33.433 c-0.302,0-0.588-0.062-0.855-0.163l2.13-2.13c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0l-2.13,2.13 C31.062,31.155,31,30.869,31,30.567V14.433c0-0.302,0.062-0.589,0.163-0.856l2.13,2.13C33.488,15.902,33.744,16,34,16 s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414l-2.13-2.13C32.844,12.062,33.131,12,33.433,12H53.567z M26.567,12 c0.302,0,0.588,0.062,0.855,0.163l-2.13,2.13c-0.391,0.391-0.391,1.023,0,1.414C25.488,15.902,25.744,16,26,16 s0.512-0.098,0.707-0.293l2.13-2.13C28.938,13.845,29,14.131,29,14.433v16.134c0,0.302-0.062,0.589-0.163,0.856l-2.13-2.13 c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414l2.13,2.13C27.156,32.938,26.869,33,26.567,33H13.993 c-0.004-0.089-0.017-0.175-0.023-0.263c-0.01-0.136-0.02-0.271-0.036-0.405c-0.017-0.142-0.04-0.282-0.064-0.422 c-0.023-0.13-0.045-0.26-0.074-0.389c-0.031-0.139-0.068-0.276-0.106-0.412c-0.034-0.124-0.068-0.248-0.108-0.37 c-0.045-0.136-0.095-0.268-0.147-0.4c-0.045-0.117-0.09-0.235-0.14-0.35c-0.057-0.131-0.121-0.257-0.185-0.385 c-0.056-0.111-0.11-0.222-0.17-0.329c-0.07-0.125-0.146-0.245-0.222-0.365c-0.065-0.104-0.128-0.208-0.198-0.308 c-0.082-0.118-0.17-0.231-0.258-0.344c-0.074-0.095-0.145-0.192-0.223-0.284c-0.093-0.11-0.192-0.214-0.291-0.32 c-0.082-0.088-0.161-0.177-0.247-0.261c-0.103-0.101-0.213-0.196-0.321-0.292c-0.089-0.079-0.176-0.16-0.268-0.236 c-0.113-0.092-0.232-0.175-0.349-0.261c-0.096-0.07-0.19-0.143-0.289-0.209c-0.122-0.081-0.25-0.154-0.377-0.229 c-0.102-0.06-0.201-0.124-0.305-0.18c-0.132-0.071-0.269-0.132-0.405-0.195c-0.106-0.05-0.209-0.103-0.317-0.149 c-0.142-0.059-0.289-0.108-0.435-0.159c-0.108-0.038-0.213-0.082-0.323-0.115c-0.155-0.048-0.315-0.083-0.474-0.122 c-0.105-0.026-0.209-0.058-0.316-0.079c-0.175-0.036-0.355-0.058-0.535-0.082c-0.095-0.013-0.187-0.033-0.283-0.042 C6.229,25.015,5.949,25,5.665,25H4V14.433c0-0.302,0.062-0.589,0.163-0.856l2.13,2.13C6.488,15.902,6.744,16,7,16 s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414l-2.13-2.13C5.844,12.062,6.131,12,6.433,12H26.567z M2,27.83 C2,27.373,2.372,27,2.83,27h2.835c0.215,0,0.427,0.011,0.637,0.032c0.07,0.007,0.138,0.021,0.207,0.031 c0.138,0.018,0.276,0.036,0.411,0.063c0.083,0.017,0.164,0.041,0.246,0.061c0.118,0.029,0.237,0.055,0.352,0.091 c0.085,0.026,0.166,0.059,0.249,0.088c0.109,0.039,0.219,0.075,0.325,0.119c0.083,0.035,0.163,0.076,0.245,0.114 c0.101,0.047,0.203,0.093,0.301,0.145c0.081,0.043,0.159,0.092,0.238,0.139c0.094,0.055,0.188,0.11,0.279,0.17 c0.078,0.051,0.151,0.108,0.227,0.162c0.086,0.063,0.173,0.125,0.256,0.192c0.073,0.059,0.143,0.123,0.214,0.185 c0.079,0.07,0.158,0.139,0.234,0.213c0.068,0.066,0.132,0.136,0.196,0.205c0.072,0.077,0.144,0.153,0.212,0.233 c0.062,0.073,0.119,0.148,0.178,0.223c0.064,0.083,0.128,0.165,0.188,0.251c0.055,0.078,0.106,0.159,0.157,0.24 c0.056,0.088,0.111,0.177,0.163,0.268c0.048,0.084,0.092,0.17,0.135,0.257c0.047,0.093,0.094,0.187,0.137,0.283 c0.039,0.089,0.076,0.179,0.111,0.27c0.039,0.098,0.076,0.197,0.109,0.298c0.031,0.093,0.059,0.187,0.086,0.282 c0.029,0.102,0.056,0.205,0.08,0.31c0.022,0.097,0.041,0.194,0.059,0.292c0.019,0.107,0.036,0.214,0.049,0.322 c0.013,0.099,0.023,0.199,0.031,0.3c0.004,0.053,0.005,0.107,0.008,0.161H3.5H2.252C2.113,33,2,32.887,2,32.748V27.83z M7.323,48H6 v-3h2.523L7.323,48z M54,48h-1.323l-1.2-3H54V48z M58,41.5c0,0.827-0.673,1.5-1.5,1.5H55h-5H10H5H3.5C2.673,43,2,42.327,2,41.5 S2.673,40,3.5,40h53C57.327,40,58,40.673,58,41.5z M3.5,38C2.673,38,2,37.327,2,36.5S2.673,35,3.5,35h8.835h14.232h6.865h14.232 H56.5c0.827,0,1.5,0.673,1.5,1.5S57.327,38,56.5,38H3.5z"
                ></path>
                <path
                  d="M13.293,23.707C13.488,23.902,13.744,24,14,24s0.512-0.098,0.707-0.293L16,22.414l1.293,1.293 C17.488,23.902,17.744,24,18,24s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414L17.414,21l1.293-1.293 c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0L16,19.586l-1.293-1.293c-0.391-0.391-1.023-0.391-1.414,0 s-0.391,1.023,0,1.414L14.586,21l-1.293,1.293C12.902,22.684,12.902,23.316,13.293,23.707z"
                ></path>
                <path
                  d="M41.293,23.707C41.488,23.902,41.744,24,42,24s0.512-0.098,0.707-0.293L44,22.414l1.293,1.293 C45.488,23.902,45.744,24,46,24s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414L45.414,21l1.293-1.293 c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0L44,19.586l-1.293-1.293c-0.391-0.391-1.023-0.391-1.414,0 s-0.391,1.023,0,1.414L42.586,21l-1.293,1.293C40.902,22.684,40.902,23.316,41.293,23.707z"
                ></path>
              </g>
            </g></svg
          >

          <div class="w-full text-2xl font-semibold">Two seater</div>
        </div>
      </label>
    </li>
    <li class="h-full">
      <input
        input-option-checked="three-seater-section"
        type="checkbox"
        id="three-seater-option"
        value="three seater"
        name="upholstery_options"
        class="hidden peer"
      />
      <label
        for="three-seater-option"
        class="inline-flex h-44 items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-[#494f8c] peer-checked:bg-[#494f8c] hover:text-gray-600 peer-checked:text-white hover:bg-gray-50 fill-black peer-checked:fill-white"
      >
        <div
          class="flex flex-col justify-center items-center w-full text-center"
        >
          <svg
            class="mb-1 w-24 h-24"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 60 60"
            xml:space="preserve"
            ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier">
              <g>
                <path
                  d="M60,26c0-1.474-0.81-2.75-2-3.444v-3.06C58,14.812,54.188,11,49.503,11h-5.675c-1.773,0-3.456,0.585-4.828,1.665 C37.628,11.585,35.945,11,34.172,11h-8.344c-1.773,0-3.456,0.585-4.828,1.665C19.628,11.585,17.945,11,16.172,11h-5.675 C5.812,11,2,14.812,2,19.497v3.06C0.81,23.25,0,24.526,0,26v20h1v3h6v-3h1h44h1v3h6v-3h1V26z M8,32h10.172 c0.263,0,0.521,0.107,0.707,0.293c1.169,1.167,3.071,1.169,4.242,0C23.308,32.107,23.565,32,23.828,32h12.344 c0.263,0,0.521,0.107,0.707,0.293c1.17,1.168,3.072,1.168,4.242,0v0C41.308,32.107,41.565,32,41.828,32H52v3H8V32z M54,37v-2v-5 v-3.7c0-0.915,0.482-1.743,1.229-2.109c0.203-0.099,0.402-0.152,0.603-0.174c0.043-0.004,0.085-0.012,0.129-0.013 c0.071-0.002,0.143,0.006,0.216,0.014c0.045,0.004,0.09,0.007,0.134,0.014c0.115,0.021,0.232,0.051,0.354,0.095l0.158,0.056 C57.515,24.497,58,25.191,58,26v18h-4V37z M49.503,13C53.085,13,56,15.915,56,19.497V22c-2.206,0-4,1.794-4,4v0.3V30H41.828 c-0.673,0-1.305,0.232-1.828,0.638V14.441C41.062,13.513,42.404,13,43.828,13H49.503z M34.172,13c1.424,0,2.767,0.513,3.828,1.441 v16.197C37.477,30.231,36.845,30,36.172,30H23.828c-0.673,0-1.305,0.232-1.828,0.638V14.441C23.062,13.513,24.404,13,25.828,13 H34.172z M4,19.497C4,15.915,6.915,13,10.497,13h5.675c1.424,0,2.767,0.513,3.828,1.441v16.197C19.477,30.231,18.845,30,18.172,30 H8v-3.7V26c0-2.206-1.794-4-4-4V19.497z M2,26c0-0.809,0.485-1.503,1.177-1.818l0.158-0.056c0.122-0.044,0.239-0.074,0.354-0.094 c0.045-0.007,0.091-0.01,0.137-0.014c0.072-0.007,0.143-0.015,0.214-0.014c0.045,0.001,0.087,0.01,0.131,0.013 c0.201,0.022,0.399,0.074,0.6,0.173C5.518,24.557,6,25.385,6,26.3V30v5v2v7H2V26z M5,47H3v-1h2V47z M52,44H8v-7h44V44z M57,47h-2 v-1h2V47z"
                ></path>
                <path
                  d="M27.293,22.707C27.488,22.902,27.744,23,28,23s0.512-0.098,0.707-0.293L30,21.414l1.293,1.293 C31.488,22.902,31.744,23,32,23s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414L31.414,20l1.293-1.293 c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0L30,18.586l-1.293-1.293c-0.391-0.391-1.023-0.391-1.414,0 s-0.391,1.023,0,1.414L28.586,20l-1.293,1.293C26.902,21.684,26.902,22.316,27.293,22.707z"
                ></path>
                <path
                  d="M45.293,22.707C45.488,22.902,45.744,23,46,23s0.512-0.098,0.707-0.293L48,21.414l1.293,1.293 C49.488,22.902,49.744,23,50,23s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414L49.414,20l1.293-1.293 c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0L48,18.586l-1.293-1.293c-0.391-0.391-1.023-0.391-1.414,0 s-0.391,1.023,0,1.414L46.586,20l-1.293,1.293C44.902,21.684,44.902,22.316,45.293,22.707z"
                ></path>
                <path
                  d="M9.293,22.707C9.488,22.902,9.744,23,10,23s0.512-0.098,0.707-0.293L12,21.414l1.293,1.293C13.488,22.902,13.744,23,14,23 s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414L13.414,20l1.293-1.293c0.391-0.391,0.391-1.023,0-1.414 s-1.023-0.391-1.414,0L12,18.586l-1.293-1.293c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414L10.586,20l-1.293,1.293 C8.902,21.684,8.902,22.316,9.293,22.707z"
                ></path>
              </g>
            </g></svg
          >
          <div class="w-full text-2xl font-semibold">Three seater</div>
        </div>
      </label>
    </li>
    <li class="h-full">
      <input
        input-option-checked="four-seater-section"
        type="checkbox"
        id="four-seater-option"
        value="Four seater"
        name="upholstery_options"
        class="hidden peer"
      />
      <label
        for="four-seater-option"
        class="inline-flex h-44 items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-[#494f8c] peer-checked:bg-[#494f8c] hover:text-gray-600 peer-checked:text-white hover:bg-gray-50 fill-black peer-checked:fill-white"
      >
        <div
          class="flex flex-col justify-center items-center w-full text-center"
        >
          <svg
            class="mb-1 h-24 w-24"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 495 495"
            xml:space="preserve"
            ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier">
              <path
                d="M403.5,24h-8c-2.997,0-5.862,0.57-8.5,1.598V23.5C387,10.542,376.458,0,363.5,0h-96C254.542,0,244,10.542,244,23.5v8V312 H99.5h-8C78.542,312,68,322.542,68,335.5v96c0,12.958,10.542,23.5,23.5,23.5h8c0.721,0,1.433-0.038,2.138-0.102 c-1.053,2.666-1.638,5.566-1.638,8.602v8c0,12.958,10.542,23.5,23.5,23.5h248c30.603,0,55.5-24.897,55.5-55.5v-392 C427,34.542,416.458,24,403.5,24z M334.606,456l-41-41h18.787l41,41H334.606z M235,440v-16.498c0-0.002,0-0.005,0-0.008 c-0.003-12.954-10.541-23.492-23.495-23.495c-0.002,0-0.005,0-0.008,0h-39.995c-0.001,0-0.003,0-0.005,0H155.5 c-12.958,0-23.5,10.542-23.5,23.5V440h-8.5c-0.721,0-1.433,0.038-2.138,0.102c1.053-2.666,1.638-5.566,1.638-8.602v-96 c0-2.997-0.57-5.862-1.597-8.5H244v113H235z M190.606,456l-37.803-37.803c-0.681-0.681-1.463-1.197-2.295-1.562 c1.404-1.023,3.126-1.635,4.992-1.635h12.894l41,41H190.606z M147,433.606L169.393,456H155.5c-4.687,0-8.5-3.813-8.5-8.5V433.606z M208.393,415L220,426.606v18.787L189.606,415H208.393z M347,92.394V87.5c0-3.753,2.448-6.941,5.829-8.064L388,114.607v18.787 L347,92.394z M355.502,64c-0.003,0-0.006,0-0.009,0C342.539,64.004,332,74.544,332,87.5v7.987c0,0.008,0,0.017,0,0.025v39.975 c0,0.008,0,0.017,0,0.025v7.987c0,12.958,10.542,23.5,23.5,23.5H372v8.999H259V53.402c2.638,1.028,5.503,1.598,8.5,1.598h96 c2.997,0,5.862-0.57,8.5-1.598V64H355.502z M259,190.999h113V200h-16.498c-0.003,0-0.006,0-0.009,0 C342.539,200.004,332,210.544,332,223.5v7.987c0,0.008,0,0.017,0,0.025v39.975c0,0.008,0,0.017,0,0.025v7.987 c0,12.958,10.542,23.5,23.5,23.5H372v9H259V190.999z M347,228.394V223.5c0-3.753,2.448-6.941,5.829-8.064L388,250.607v18.787 L347,228.394z M259,327h113v9h-0.498c-0.002,0-0.003,0-0.005,0H355.5c-12.958,0-23.5,10.542-23.5,23.5v31.987 c0,0.008,0,0.017,0,0.025V400h-16.498c-0.002,0-0.003,0-0.005,0H291.5c-12.958,0-23.5,10.542-23.5,23.5V440h-9V327z M388,389.394 l-35.197-35.197c-0.681-0.681-1.463-1.197-2.295-1.562c1.404-1.023,3.126-1.635,4.992-1.635h12.893L388,370.607V389.394z M347,388.394v-18.787l41,41v18.787L347,388.394z M294.606,456L283,444.394v-18.787L313.393,456H294.606z M374.344,455.737 L333.606,415h5.894c3.497,0,6.427-2.397,7.257-5.636l35.439,35.439c1.141,1.141,2.559,1.832,4.037,2.083 C383.927,451.468,379.556,454.826,374.344,455.737z M379.5,288h-12.894L347,268.394v-18.787l35.196,35.196 c0.681,0.681,1.463,1.197,2.296,1.562C383.089,287.388,381.366,288,379.5,288z M388,229.394L373.606,215h5.894 c4.687,0,8.5,3.813,8.5,8.5V229.394z M379.5,152h-12.894L347,132.394v-18.787l35.196,35.196c0.681,0.681,1.463,1.197,2.296,1.562 C383.089,151.388,381.366,152,379.5,152z M388,93.394L373.606,79h5.894c4.687,0,8.5,3.813,8.5,8.5V93.394z M267.5,15h96 c4.687,0,8.5,3.813,8.5,8.5v8c0,4.687-3.813,8.5-8.5,8.5h-96c-4.687,0-8.5-3.813-8.5-8.5v-8C259,18.813,262.813,15,267.5,15z M91.5,440c-4.687,0-8.5-3.813-8.5-8.5v-96c0-4.687,3.813-8.5,8.5-8.5h8c4.687,0,8.5,3.813,8.5,8.5v96c0,4.687-3.813,8.5-8.5,8.5 H91.5z M412,439.5c0,22.332-18.168,40.5-40.5,40.5h-248c-4.687,0-8.5-3.813-8.5-8.5v-8c0-4.687,3.813-8.5,8.5-8.5h9.734 c3.138,9.29,11.93,16,22.266,16h56c10.336,0,19.128-6.71,22.266-16h35.469c3.138,9.29,11.93,16,22.266,16h80 c17.369,0,31.5-14.131,31.5-31.5v-80c0-10.335-6.71-19.127-16-22.266v-35.469c9.29-3.138,16-11.93,16-22.266v-56 c0-10.335-6.71-19.127-16-22.266v-35.469c9.29-3.138,16-11.93,16-22.266v-56c0-10.335-6.71-19.127-16-22.266V47.5 c0-4.687,3.813-8.5,8.5-8.5h8c4.687,0,8.5,3.813,8.5,8.5V439.5z"
              ></path>
            </g></svg
          >
          <div class="w-full text-2xl font-semibold">Four seater</div>
        </div>
      </label>
    </li>
  </ul>
</div>
<div id="dining-chair-section" class="hidden w-full">
  <div
    class="flex justify-between items-center w-full px-2 md:px-16 mb-6 md:mb-5"
  >
    <label
      for="dining-chair-count"
      class="font-semibold text-lg text-muted"
      >How many dining chairs? <span class="text-red-500">*</span></label
    >
    <div
      class="h-10 w-28 bg-gray-50 flex border border-gray-200 rounded items-center mt-1"
    >
      <button
        type="button"
        id="decrement-button-dining-chair-count"
        data-input-counter="quantity-dining-chair-count"
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
        name="dining_chair_count"
        maxlength="1"
        min="1"
        type="text"
        id="quantity-dining-chair-count"
        class="px-2 text-center appearance-none outline-none text-gray-800 w-full bg-transparent"
        value="1"
        oninput="this.value = this.value.replace(/[^1-9]/g, '');"
        disabled
        required
      />
      <button
        type="button"
        id="increment-button-dining-chair-count"
        data-input-counter="quantity-dining-chair-count"
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
<div id="armchair-section" class="hidden w-full">
  <div
    class="flex justify-between items-center w-full px-2 md:px-16 mb-6 md:mb-5"
  >
    <label for="armchair-count" class="font-semibold text-lg text-muted"
      >How many armchairs? <span class="text-red-500">*</span></label
    >
    <div
      class="h-10 w-28 bg-gray-50 flex border border-gray-200 rounded items-center mt-1"
    >
      <button
        type="button"
        id="decrement-button-armchair-count"
        data-input-counter="quantity-armchair-count"
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
        name="armchair_count"
        maxlength="1"
        min="1"
        type="text"
        id="quantity-armchair-count"
        class="px-2 text-center appearance-none outline-none text-gray-800 w-full bg-transparent"
        value="1"
        oninput="this.value = this.value.replace(/[^1-9]/g, '');"
        disabled
        required
      />
      <button
        type="button"
        id="increment-button-armchair-count"
        data-input-counter="quantity-armchair-count"
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
<div id="two-seater-section" class="hidden w-full">
  <div
    class="flex justify-between items-center w-full px-2 md:px-16 mb-6 md:mb-5"
  >
    <label for="two_seater-count" class="font-semibold text-lg text-muted"
      >How many 2 seater sofas? <span class="text-red-500">*</span></label
    >
    <div
      class="h-10 w-28 bg-gray-50 flex border border-gray-200 rounded items-center mt-1"
    >
      <button
        type="button"
        id="decrement-button-two_seater-count"
        data-input-counter="quantity-two_seater-count"
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
        name="two_seater_count"
        maxlength="1"
        min="1"
        type="text"
        id="quantity-two_seater-count"
        class="px-2 text-center appearance-none outline-none text-gray-800 w-full bg-transparent"
        value="1"
        oninput="this.value = this.value.replace(/[^1-9]/g, '');"
        disabled
        required
      />
      <button
        type="button"
        id="increment-button-two_seater-count"
        data-input-counter="quantity-two_seater-count"
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
<div id="three-seater-section" class="hidden w-full">
  <div
    class="flex justify-between items-center w-full px-2 md:px-16 mb-6 md:mb-5"
  >
    <label
      for="three_seater-count"
      class="font-semibold text-lg text-muted"
      >How many 3 seater sofas? <span class="text-red-500">*</span></label
    >
    <div
      class="h-10 w-28 bg-gray-50 flex border border-gray-200 rounded items-center mt-1"
    >
      <button
        type="button"
        id="decrement-button-three_seater-count"
        data-input-counter="quantity-three_seater-count"
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
        name="three_seater_count"
        maxlength="1"
        min="1"
        type="text"
        id="quantity-three_seater-count"
        class="px-2 text-center appearance-none outline-none text-gray-800 w-full bg-transparent"
        value="1"
        oninput="this.value = this.value.replace(/[^1-9]/g, '');"
        disabled
        required
      />
      <button
        type="button"
        id="increment-button-three_seater-count"
        data-input-counter="quantity-three_seater-count"
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
<div id="four-seater-section" class="hidden w-full">
  <div
    class="flex justify-between items-center w-full px-2 md:px-16 mb-6 md:mb-5"
  >
    <label
      for="four_seater-count"
      class="font-semibold text-lg text-muted"
      >How many 4 seater sofas?<span class="text-red-500">*</span></label
    >
    <div
      class="h-10 w-28 bg-gray-50 flex border border-gray-200 rounded items-center mt-1"
    >
      <button
        type="button"
        id="decrement-button-four_seater-count"
        data-input-counter="quantity-four_seater-count"
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
        name="four_seater_count"
        maxlength="1"
        min="1"
        type="text"
        id="quantity-four_seater-count"
        class="px-2 text-center appearance-none outline-none text-gray-800 w-full bg-transparent"
        value="1"
        oninput="this.value = this.value.replace(/[^1-9]/g, '');"
        disabled
        required
      />
      <button
        type="button"
        id="increment-button-four_seater-count"
        data-input-counter="quantity-four_seater-count"
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
<div class="flex-row w-full px-2 mt-8 md:px-16 mb-6 md:mb-5">
  <label class="mb-5 text-lg font-medium text-gray-900">
    What kind of material are your items? <span class="text-red-500"
      >*</span
    >
  </label>
  <ul class="grid w-full gap-2 md:gap-3 md:grid-cols-4 mt-4">
    <li class="h-full">
      <input
        type="checkbox"
        id="fabric"
        value="fabric"
        name="material_options"
        class="hidden peer"
      />
      <label
        for="fabric"
        class="inline-flex h-20 items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-[#494f8c] peer-checked:bg-[#494f8c] hover:text-gray-600 peer-checked:text-white hover:bg-gray-50 fill-black peer-checked:fill-white"
      >
        <div class="w-full text-lg font-semibold text-center">Fabric</div>
      </label>
    </li>
    <li class="h-full">
      <input
        type="checkbox"
        id="velvet-option"
        value="velvet"
        name="material_options"
        class="hidden peer"
      />
      <label
        for="velvet-option"
        class="inline-flex h-20 items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-[#494f8c] peer-checked:bg-[#494f8c] hover:text-gray-600 peer-checked:text-white hover:bg-gray-50 fill-black peer-checked:fill-white"
      >
        <div class="w-full text-lg font-semibold text-center">Velvet</div>
      </label>
    </li>
    <li class="h-full">
      <input
        type="checkbox"
        id="delicate-option"
        value="delicate"
        name="material_options"
        class="hidden peer"
      />
      <label
        for="delicate-option"
        class="inline-flex h-20 items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-[#494f8c] peer-checked:bg-[#494f8c] hover:text-gray-600 peer-checked:text-white hover:bg-gray-50 fill-black peer-checked:fill-white"
      >
        <div class="w-full text-lg font-semibold text-center">
          Delicate
        </div>
      </label>
    </li>
    <li class="h-full">
      <input
        input-option-checked="other-section"
        type="checkbox"
        id="other-option"
        value="other"
        name="material_options"
        class="hidden peer"
      />
      <label
        for="other-option"
        class="inline-flex h-20 items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-[#494f8c] peer-checked:bg-[#494f8c] hover:text-gray-600 peer-checked:text-white hover:bg-gray-50 fill-black peer-checked:fill-white"
      >
        <div class="w-full text-lg font-semibold text-center">Other</div>
      </label>
    </li>
  </ul>
</div>
<div id="other-section" class="w-full px-2 md:px-16 mb-6 md:mb-8 hidden">
  <label
    class="block tracking-wide text-gray-700 text-base font-bold mb-2"
    for="other_material"
  >
    Other material <span class="text-red-500">*</span>
  </label>
  <input
    class="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-800"
    id="other_material"
    name="other_material"
    type="text"
  />
</div>
<div class="flex-row w-full px-2 md:px-16 mb-6 md:mb-5">
  <label
    class="block tracking-wide text-gray-700 text-base font-bold mb-2"
  >
  Would you like to add mattress cleaning? <span class="text-red-500">*</span>
  </label>
  <ul class="grid w-full gap-2 md:gap-4 md:grid-cols-4 mt-4">
    <li class="h-full">
      <input
        input-radio-checked="mattress-section"
        type="radio"
        id="mattress-option-yes"
        name="mattress_option"
        value="yes"
        class="hidden peer"
        required
      />
      <label
        for="mattress-option-yes"
        class="inline-flex h-12 items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-[#494f8c] peer-checked:bg-[#494f8c] hover:text-gray-600 peer-checked:text-white hover:bg-gray-50 fill-black peer-checked:fill-white"
      >
        <div class="w-full text-lg font-semibold text-center">Yes</div>
      </label>
    </li>
    <li class="h-full">
      <input
        input-radio-checked
        type="radio"
        id="mattress-option-no"
        value="no"
        name="mattress_option"
        class="hidden peer"
      />
      <label
        for="mattress-option-no"
        class="inline-flex h-12 items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-[#494f8c] peer-checked:bg-[#494f8c] hover:text-gray-600 peer-checked:text-white hover:bg-gray-50 fill-black peer-checked:fill-white"
      >
        <div class="w-full text-lg font-semibold text-center">No</div>
      </label>
    </li>
  </ul>
</div>
<div id="mattress-section" class="my-2 w-full md:px-16 px-5 hidden">
  <h3 class="mb-5 text-xl font-medium text-gray-900 text-center">
    Mattress Cleaning
  </h3>
  <div
    class="flex justify-between items-center w-full my-2 pb-5 border-b-4 border-dotted"
  >
    <label for="babycot" class="font-semibold text-lg text-muted"
      >Babycot <span class="text-red-500">*</span></label
    >
    <div
      class="h-10 w-28 bg-gray-50 flex border border-gray-200 rounded items-center mt-1"
    >
      <button
        type="button"
        id="decrement-button-babycot"
        data-input-counter="quantity-babycot"
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
        name="babycot"
        maxlength="1"
        min="0"
        value="0"
        oninput="this.value = this.value.replace(/[^0-9]/g, '');"
        type="text"
        id="quantity-babycot"
        class="px-2 text-center appearance-none outline-none text-gray-800 w-full bg-transparent"
        required
        disabled
      />
      <button
        type="button"
        id="increment-button-babycot"
        data-input-counter="quantity-babycot"
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
    class="flex justify-between items-center w-full my-2 pb-5 border-b-4 border-dotted"
  >
    <label for="single_mattress" class="font-semibold text-lg text-muted"
      >Single Mattress <span class="text-red-500">*</span></label
    >
    <div
      class="h-10 w-28 bg-gray-50 flex border border-gray-200 rounded items-center mt-1"
    >
      <button
        type="button"
        id="decrement-button-single_mattress"
        data-input-counter="quantity-single_mattress"
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
        name="single_mattress"
        maxlength="1"
        min="0"
        value="0"
        oninput="this.value = this.value.replace(/[^0-9]/g, '');"
        type="text"
        id="quantity-single_mattress"
        class="px-2 text-center appearance-none outline-none text-gray-800 w-full bg-transparent"
        required
        disabled
      />
      <button
        type="button"
        id="increment-button-single_mattress"
        data-input-counter="quantity-single_mattress"
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
    class="flex justify-between items-center w-full my-2 pb-5 border-b-4 border-dotted"
  >
    <label for="double-mattress" class="font-semibold text-lg text-muted"
      >Double Mattress <span class="text-red-500">*</span></label
    >
    <div
      class="h-10 w-28 bg-gray-50 flex border border-gray-200 rounded items-center mt-1"
    >
      <button
        type="button"
        id="decrement-button-double-mattress"
        data-input-counter="quantity-double-mattress"
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
        name="double-mattress"
        maxlength="1"
        min="0"
        value="0"
        oninput="this.value = this.value.replace(/[^0-9]/g, '');"
        type="text"
        id="quantity-double-mattress"
        class="px-2 text-center appearance-none outline-none text-gray-800 w-full bg-transparent"
        required
        disabled
      />
      <button
        type="button"
        id="increment-button-double-mattress"
        data-input-counter="quantity-double-mattress"
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
    class="flex justify-between items-center w-full my-2 pb-5 border-b-4 border-dotted"
  >
    <label for="queen-size" class="font-semibold text-lg text-muted"
      >Queen size <span class="text-red-500">*</span></label
    >
    <div
      class="h-10 w-28 bg-gray-50 flex border border-gray-200 rounded items-center mt-1"
    >
      <button
        type="button"
        id="decrement-button-queen-size"
        data-input-counter="quantity-queen-size"
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
        name="queen-size"
        maxlength="1"
        min="0"
        value="0"
        oninput="this.value = this.value.replace(/[^0-9]/g, '');"
        type="text"
        id="quantity-queen-size"
        class="px-2 text-center appearance-none outline-none text-gray-800 w-full bg-transparent"
        required
        disabled
      />
      <button
        type="button"
        id="increment-button-queen-size"
        data-input-counter="quantity-queen-size"
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
    class="flex justify-between items-center w-full my-2 pb-5 border-b-4 border-dotted"
  >
    <label for="king-size" class="font-semibold text-lg text-muted"
      >King size <span class="text-red-500">*</span></label
    >
    <div
      class="h-10 w-28 bg-gray-50 flex border border-gray-200 rounded items-center mt-1"
    >
      <button
        type="button"
        id="decrement-button-king-size"
        data-input-counter="quantity-king-size"
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
        name="king-size"
        maxlength="1"
        min="0"
        value="0"
        oninput="this.value = this.value.replace(/[^0-9]/g, '');"
        type="text"
        id="quantity-king-size"
        class="px-2 text-center appearance-none outline-none text-gray-800 w-full bg-transparent"
        required
        disabled
      />
      <button
        type="button"
        id="increment-button-king-size"
        data-input-counter="quantity-king-size"
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
  'Window Cleaning': `<div
  class="flex justify-between items-center w-full px-5 md:px-20 my-2 pb-5 border-b-4 border-dotted"
>
  <label for="small_window" class="font-semibold text-lg text-muted"
    >Small window <span class="text-red-500">*</span></label
  >
  <div
    class="h-10 w-28 bg-gray-50 flex border border-gray-200 rounded items-center mt-1"
  >
    <button
      type="button"
      id="decrement-button-small_window"
      data-input-counter="quantity-small_window"
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
      name="small_window"
      maxlength="1"
      min="0"
      value="0"
      oninput="this.value = this.value.replace(/[^0-9]/g, '');"
      type="text"
      id="quantity-small_window"
      class="px-2 text-center appearance-none outline-none text-gray-800 w-full bg-transparent"
      required
    />
    <button
      type="button"
      id="increment-button-small_window"
      data-input-counter="quantity-small_window"
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
  <label for="medium_window" class="font-semibold text-lg text-muted"
    >Medium window <span class="text-red-500">*</span></label
  >
  <div
    class="h-10 w-28 bg-gray-50 flex border border-gray-200 rounded items-center mt-1"
  >
    <button
      type="button"
      id="decrement-button-medium_window"
      data-input-counter="quantity-medium_window"
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
      name="medium_window"
      maxlength="1"
      min="0"
      value="0"
      oninput="this.value = this.value.replace(/[^0-9]/g, '');"
      type="text"
      id="quantity-medium_window"
      class="px-2 text-center appearance-none outline-none text-gray-800 w-full bg-transparent"
      required
    />
    <button
      type="button"
      id="increment-button-medium_window"
      data-input-counter="quantity-medium_window"
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
  <label for="large_window" class="font-semibold text-lg text-muted"
    >Large window <span class="text-red-500">*</span></label
  >
  <div
    class="h-10 w-28 bg-gray-50 flex border border-gray-200 rounded items-center mt-1"
  >
    <button
      type="button"
      id="decrement-button-large_window"
      data-input-counter="quantity-large_window"
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
      name="large_window"
      maxlength="1"
      min="0"
      value="0"
      oninput="this.value = this.value.replace(/[^0-9]/g, '');"
      type="text"
      id="quantity-large_window"
      class="px-2 text-center appearance-none outline-none text-gray-800 w-full bg-transparent"
      required
    />
    <button
      type="button"
      id="increment-button-large_window"
      data-input-counter="quantity-large_window"
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
  <label for="bay_window" class="font-semibold text-lg text-muted"
    >Bay window <span class="text-red-500">*</span></label
  >
  <div
    class="h-10 w-28 bg-gray-50 flex border border-gray-200 rounded items-center mt-1"
  >
    <button
      type="button"
      id="decrement-button-bay_window"
      data-input-counter="quantity-bay_window"
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
      name="bay_window"
      maxlength="1"
      min="0"
      value="0"
      oninput="this.value = this.value.replace(/[^0-9]/g, '');"
      type="text"
      id="quantity-bay_window"
      class="px-2 text-center appearance-none outline-none text-gray-800 w-full bg-transparent"
      required
    />
    <button
      type="button"
      id="increment-button-bay_window"
      data-input-counter="quantity-bay_window"
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
  <label for="french_door" class="font-semibold text-lg text-muted"
    >French door <span class="text-red-500">*</span></label
  >
  <div
    class="h-10 w-28 bg-gray-50 flex border border-gray-200 rounded items-center mt-1"
  >
    <button
      type="button"
      id="decrement-button-french_door"
      data-input-counter="quantity-french_door"
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
      name="french_door"
      maxlength="1"
      min="0"
      value="0"
      oninput="this.value = this.value.replace(/[^0-9]/g, '');"
      type="text"
      id="quantity-french_door"
      class="px-2 text-center appearance-none outline-none text-gray-800 w-full bg-transparent"
      required
    />
    <button
      type="button"
      id="increment-button-french_door"
      data-input-counter="quantity-french_door"
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

<div class="flex-row w-full px-2 mt-5 md:px-16 mb-6 md:mb-5">
  <label class="mb-5 text-lg font-medium text-gray-900">
    Which sides of the windows should we clean? <span class="text-red-500"
      >*</span
    >
  </label>
  <ul class="grid w-full gap-2 md:gap-4 md:grid-cols-4 mt-4">
    <li class="h-full">
      <input
        type="radio"
        id="outside-option"
        name="window_cleaning_sides"
        value="outside"
        class="hidden peer"
        required
      />
      <label
        for="outside-option"
        class="inline-flex h-16 items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-[#494f8c] peer-checked:bg-[#494f8c] hover:text-gray-600 peer-checked:text-white hover:bg-gray-50 fill-black peer-checked:fill-white"
      >
        <div class="w-full text-lg font-semibold text-center">
          Outside
        </div>
      </label>
    </li>

    <li class="h-full">
      <input
        type="radio"
        id="inside-option"
        value="inside"
        name="window_cleaning_sides"
        class="hidden peer"
      />
      <label
        for="inside-option"
        class="inline-flex h-16 items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-[#494f8c] peer-checked:bg-[#494f8c] hover:text-gray-600 peer-checked:text-white hover:bg-gray-50 fill-black peer-checked:fill-white"
      >
        <div class="w-full text-lg font-semibold text-center">Inside</div>
      </label>
    </li>
    <li class="h-full">
      <input
        type="radio"
        id="inside_and_outside-option"
        value="inside and outside"
        name="window_cleaning_sides"
        class="hidden peer"
      />
      <label
        for="inside_and_outside-option"
        class="inline-flex h-16 items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-[#494f8c] peer-checked:bg-[#494f8c] hover:text-gray-600 peer-checked:text-white hover:bg-gray-50 fill-black peer-checked:fill-white"
      >
        <div class="w-full text-lg font-semibold text-center">
          Inside and Outside
        </div>
      </label>
    </li>
  </ul>
</div>

<div class="flex-row w-full px-2 mt-8 md:px-16 mb-6 md:mb-5">
  <label class="mb-5 text-lg font-medium text-gray-900">
    Would you be able to provide us with:
  </label>
  <ul class="grid w-full gap-2 md:gap-3 md:grid-cols-4 mt-4">
    <li class="h-full">
      <input
        input-option-checked="electricity-section"
        type="checkbox"
        id="electricity-option"
        value="electricity"
        name="utility_options"
        class="hidden peer"
      />
      <label
        for="electricity-option"
        class="inline-flex h-16 items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-[#494f8c] peer-checked:bg-[#494f8c] hover:text-gray-600 peer-checked:text-white hover:bg-gray-50 fill-black peer-checked:fill-white"
      >
        <div class="w-full text-lg font-semibold text-center">
          Electricity
        </div>
      </label>
    </li>
    <li class="h-full">
      <input
        input-option-checked="water-section"
        type="checkbox"
        id="water-option"
        value="water"
        name="utility_options"
        class="hidden peer"
      />
      <label
        for="water-option"
        class="inline-flex h-16 items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-[#494f8c] peer-checked:bg-[#494f8c] hover:text-gray-600 peer-checked:text-white hover:bg-gray-50 fill-black peer-checked:fill-white"
      >
        <div class="w-full text-lg font-semibold text-center">Water</div>
      </label>
    </li>
  </ul>
</div>
<div id="electricity-section" class="w-full px-2 md:px-16 mb-6 md:mb-8 hidden">
  <label
    class="block tracking-wide text-gray-700 text-base font-bold mb-2"
    for="electricity-location"
  >
    Where is the electrical outlet located: <span class="text-red-500"
      >*</span
    >
  </label>
  <ul class="grid w-full gap-2 md:gap-4 md:grid-cols-4 mt-4">
    <li class="h-full">
      <input
        type="radio"
        id="inside-location"
        name="electricity-location"
        value="inside"
        class="hidden peer"
        required
        disabled
      />
      <label
        for="inside-location"
        class="inline-flex h-12 items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-[#494f8c] peer-checked:bg-[#494f8c] hover:text-gray-600 peer-checked:text-white hover:bg-gray-50 fill-black peer-checked:fill-white"
      >
        <div class="w-full text-lg font-semibold text-center">Inside</div>
      </label>
    </li>
    <li class="h-full">
      <input
        type="radio"
        id="outside-location"
        value="outside"
        name="electricity-location"
        class="hidden peer"
        disabled
      />
      <label
        for="outside-location"
        class="inline-flex h-12 items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-[#494f8c] peer-checked:bg-[#494f8c] hover:text-gray-600 peer-checked:text-white hover:bg-gray-50 fill-black peer-checked:fill-white"
      >
        <div class="w-full text-lg font-semibold text-center">
          Outside
        </div>
      </label>
    </li>
  </ul>
</div>
<div id="water-section" class="w-full px-2 md:px-16 mb-6 md:mb-8 hidden">
  <label
    class="block tracking-wide text-gray-700 text-base font-bold mb-2"
    for="water-location"
  >
    Where is your water tap located: <span class="text-red-500">*</span>
  </label>
  <ul class="grid w-full gap-2 md:gap-4 md:grid-cols-4 mt-4">
    <li class="h-full">
      <input
        type="radio"
        id="inside-location-water"
        name="water-location"
        value="inside"
        class="hidden peer"
        required
        disabled
      />
      <label
        for="inside-location-water"
        class="inline-flex h-12 items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-[#494f8c] peer-checked:bg-[#494f8c] hover:text-gray-600 peer-checked:text-white hover:bg-gray-50 fill-black peer-checked:fill-white"
      >
        <div class="w-full text-lg font-semibold text-center">Inside</div>
      </label>
    </li>
    <li class="h-full">
      <input
        type="radio"
        id="outside-location-water"
        value="outside"
        name="water-location"
        class="hidden peer"
        disabled
      />
      <label
        for="outside-location-water"
        class="inline-flex h-12 items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-[#494f8c] peer-checked:bg-[#494f8c] hover:text-gray-600 peer-checked:text-white hover:bg-gray-50 fill-black peer-checked:fill-white"
      >
        <div class="w-full text-lg font-semibold text-center">
          Outside
        </div>
      </label>
    </li>
  </ul>
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
  'Curtain Cleaning': `<div
  class="flex justify-between items-center w-full px-5 md:px-20 my-2 pb-5 border-b-4 border-dotted"
>
  <label for="short" class="font-semibold text-lg text-muted"
    >Short <span class="text-red-500">*</span></label
  >
  <div
    class="h-10 w-28 bg-gray-50 flex border border-gray-200 rounded items-center mt-1"
  >
    <button
      type="button"
      id="decrement-button-short"
      data-input-counter="quantity-short"
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
      name="short"
      maxlength="1"
      min="0"
      value="0"
      oninput="this.value = this.value.replace(/[^0-9]/g, '');"
      type="text"
      id="quantity-short"
      class="px-2 text-center appearance-none outline-none text-gray-800 w-full bg-transparent"
      required
    />
    <button
      type="button"
      id="increment-button-short"
      data-input-counter="quantity-short"
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
  <label for="full_length" class="font-semibold text-lg text-muted"
    >Full length <span class="text-red-500">*</span></label
  >
  <div
    class="h-10 w-28 bg-gray-50 flex border border-gray-200 rounded items-center mt-1"
  >
    <button
      type="button"
      id="decrement-button-full_length"
      data-input-counter="quantity-full_length"
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
      name="full_length"
      maxlength="1"
      min="0"
      value="0"
      oninput="this.value = this.value.replace(/[^0-9]/g, '');"
      type="text"
      id="quantity-full_length"
      class="px-2 text-center appearance-none outline-none text-gray-800 w-full bg-transparent"
      required
    />
    <button
      type="button"
      id="increment-button-full_length"
      data-input-counter="quantity-full_length"
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

<div class="flex-row w-full px-2 mt-5 md:px-16 mb-6 md:mb-5">
  <label class="mb-5 text-lg font-medium text-gray-900">
    Select Cleaning Method: <span class="text-red-500">*</span>
  </label>
  <ul class="grid w-full gap-2 md:gap-4 md:grid-cols-3 mt-4">
    <li class="h-full">
      <input
        type="radio"
        id="steam-option"
        name="cleaning_method"
        value="steam"
        class="hidden peer"
        required
      />
      <label
        for="steam-option"
        class="inline-flex h-16 items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-[#494f8c] peer-checked:bg-[#494f8c] hover:text-gray-600 peer-checked:text-white hover:bg-gray-50 fill-black peer-checked:fill-white"
      >
        <div class="w-full text-lg font-semibold text-center">
          Steam Cleaning
        </div>
      </label>
    </li>

    <li class="h-full">
      <input
        type="radio"
        id="dry-option"
        value="dry"
        name="cleaning_method"
        class="hidden peer"
      />
      <label
        for="dry-option"
        class="inline-flex h-16 items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-[#494f8c] peer-checked:bg-[#494f8c] hover:text-gray-600 peer-checked:text-white hover:bg-gray-50 fill-black peer-checked:fill-white"
      >
        <div class="w-full text-lg font-semibold text-center">
          Dry Cleaning
        </div>
      </label>
    </li>
  </ul>
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
  'Oven Cleaning': `<div class="flex-row w-full px-2 mt-8 md:px-16 mb-6 md:mb-5">
  <label class="mb-5 text-lg font-medium text-gray-900">
    What kind of Sofas/Chairs would you like cleaned? <span
      class="text-red-500">*</span
    >
  </label>
  <ul class="grid w-full gap-2 md:gap-10 md:grid-cols-3 mt-4">
    <li class="h-full">
      <input
        input-option-checked="aga_oven-section"
        type="checkbox"
        id="aga_oven-option"
        value="aga oven"
        name="oven_options"
        class="hidden peer"
      />
      <label
        for="aga_oven-option"
        class="inline-flex h-44 items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-[#494f8c] peer-checked:bg-[#494f8c] hover:text-gray-600 peer-checked:text-white hover:bg-gray-50 fill-black peer-checked:fill-white stroke-black peer-checked:stroke-white"
      >
        <div
          class="flex flex-col justify-center items-center w-full text-center"
        >
          <svg
            class="mb-1 w-24 h-24"
            viewBox="77.803 190.572 334.828 252.361"
            width="334.828"
            height="252.361"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="77.803"
              y="190.572"
              width="334.828"
              height="225.211"
              style="fill: none; fill-rule: evenodd;paint-order: fill; stroke-linecap: round; stroke-miterlimit: 30; stroke-linejoin: round; stroke-width: 23px;"
              transform="matrix(0.9999999999999999, 0, 0, 0.9999999999999999, -1.4210854715202004e-14, -1.4210854715202004e-14)"
            ></rect>
            <rect
              x="256.539"
              y="217.496"
              width="122.936"
              height="65.258"
              style="fill: none; stroke-width: 11px;"
              rx="3.073"
              ry="3.073"
              transform="matrix(0.9999999999999999, 0, 0, 0.9999999999999999, -1.4210854715202004e-14, -1.4210854715202004e-14)"
            ></rect>
            <rect
              x="108.966"
              y="217.893"
              width="122.936"
              height="65.258"
              style="fill: none; stroke-width: 11px;"
              rx="3.073"
              ry="3.073"
              transform="matrix(0.9999999999999999, 0, 0, 0.9999999999999999, -1.4210854715202004e-14, -1.4210854715202004e-14)"
            ></rect>
            <rect
              x="107.213"
              y="309.039"
              width="122.936"
              height="65.258"
              style="fill: none; stroke-width: 11px;"
              rx="3.073"
              ry="3.073"
              transform="matrix(0.9999999999999999, 0, 0, 0.9999999999999999, -1.4210854715202004e-14, -1.4210854715202004e-14)"
            ></rect>
            <rect
              x="257.077"
              y="309.915"
              width="122.936"
              height="65.258"
              style="fill: none; stroke-width: 11px;"
              rx="3.073"
              ry="3.073"
              transform="matrix(0.9999999999999999, 0, 0, 0.9999999999999999, -1.4210854715202004e-14, -1.4210854715202004e-14)"
            ></rect>
            <rect
              x="113.257"
              y="426.679"
              width="43.82"
              height="15.775"
              style=""
              transform="matrix(0.9999999999999999, 0, 0, 0.9999999999999999, -1.4210854715202004e-14, -1.4210854715202004e-14)"
            ></rect>
            <rect
              x="320.689"
              y="427.158"
              width="43.82"
              height="15.775"
              style=""
              transform="matrix(0.9999999999999999, 0, 0, 0.9999999999999999, -1.4210854715202004e-14, -1.4210854715202004e-14)"
            ></rect>
            <rect
              x="365.323"
              y="321.48"
              width="28.763"
              height="16.293"
              style=""
              transform="matrix(0.9999999999999999, 0, 0, 0.9999999999999999, -1.4210854715202004e-14, -1.4210854715202004e-14)"
            ></rect>
            <rect
              x="366.031"
              y="345.626"
              width="28.199"
              height="16.293"
              style=""
              transform="matrix(0.9999999999999999, 0, 0, 0.9999999999999999, -1.4210854715202004e-14, -1.4210854715202004e-14)"
            ></rect>
            <rect
              x="366.595"
              y="251.132"
              width="26.507"
              height="16.293"
              style=""
              transform="matrix(0.9999999999999999, 0, 0, 0.9999999999999999, -1.4210854715202004e-14, -1.4210854715202004e-14)"
            ></rect>
            <rect
              x="365.557"
              y="227.739"
              width="28.763"
              height="16.293"
              style=""
              transform="matrix(0.9999999999999999, 0, 0, 0.9999999999999999, -1.4210854715202004e-14, -1.4210854715202004e-14)"
            ></rect>
            <rect
              x="245.271"
              y="238.395"
              width="23.802"
              height="16.293"
              style=""
              transform="matrix(0.9999999999999999, 0, 0, 0.9999999999999999, -1.4210854715202004e-14, -1.4210854715202004e-14)"
            ></rect>
            <rect
              x="245.073"
              y="334.732"
              width="23.238"
              height="16.293"
              style=""
              transform="matrix(0.9999999999999999, 0, 0, 0.9999999999999999, -1.4210854715202004e-14, -1.4210854715202004e-14)"
            ></rect>
            <rect
              x="92.277"
              y="347.085"
              width="33.275"
              height="16.293"
              style=""
              transform="matrix(0.9999999999999999, 0, 0, 0.9999999999999999, -1.4210854715202004e-14, -1.4210854715202004e-14)"
            ></rect>
            <rect
              x="92.23"
              y="322.336"
              width="33.275"
              height="16.293"
              style=""
              transform="matrix(0.9999999999999999, 0, 0, 0.9999999999999999, -1.4210854715202004e-14, -1.4210854715202004e-14)"
            ></rect>
            <rect
              x="93.912"
              y="251.738"
              width="33.275"
              height="16.293"
              style=""
              transform="matrix(0.9999999999999999, 0, 0, 0.9999999999999999, -1.4210854715202004e-14, -1.4210854715202004e-14)"
            ></rect>
            <rect
              x="93.671"
              y="229.219"
              width="33.275"
              height="16.293"
              style=""
              transform="matrix(0.9999999999999999, 0, 0, 0.9999999999999999, -1.4210854715202004e-14, -1.4210854715202004e-14)"
            ></rect>
            <rect
              x="219.16"
              y="238.424"
              width="22.674"
              height="16.293"
              style=""
              transform="matrix(0.9999999999999999, 0, 0, 0.9999999999999999, -1.4210854715202004e-14, -1.4210854715202004e-14)"
            ></rect>
            <rect
              x="218.724"
              y="334.85"
              width="22.11"
              height="16.293"
              style=""
              transform="matrix(0.9999999999999999, 0, 0, 0.9999999999999999, -1.4210854715202004e-14, -1.4210854715202004e-14)"
            ></rect>
          </svg>
          <div class="w-full text-2xl font-semibold">Aga oven</div>
        </div>
      </label>
    </li>
    <li class="h-full">
      <input
        input-option-checked="bbqs-section"
        type="checkbox"
        id="bbqs-option"
        value="bbqs"
        name="oven_options"
        class="hidden peer"
      />
      <label
        for="bbqs-option"
        class="inline-flex h-44 items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-[#494f8c] peer-checked:bg-[#494f8c] hover:text-gray-600 peer-checked:text-white hover:bg-gray-50 fill-black peer-checked:fill-white"
      >
        <div
          class="flex flex-col justify-center items-center w-full text-center"
        >
          <svg
            class="mb-1 w-24 h-24"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 512 512"
          >
            <path
              class="st0"
              d="M498.268,83.64c-3.426-6.862-8.517-13.483-19.147-11.894c-8.634,1.29-16.353,3.693-29.927-4.632 c-40.041-33.945-111.581-56.56-193.202-56.56c-81.654,0-153.22,22.632-193.244,56.593c-13.541,8.284-21.252,5.889-29.868,4.599 c-10.63-1.588-15.72,5.032-19.148,11.894c-4.758,9.524-24.13,43.293-6.388,57.492c13.766,11.021,20.487,17.924,23.789,22 c14.174,96.917,94.588,196.63,224.859,196.63c130.288,0,210.703-99.712,224.875-196.63c3.302-4.076,10.023-10.979,23.789-22 C522.398,126.933,503.026,93.164,498.268,83.64z M71.506,129.769c0-36.473,42.396-67.93,104.02-83.043l-101.542,97.5 C72.488,139.501,71.506,134.702,71.506,129.769z M89.606,169.685c-0.723-0.748-1.355-1.538-2.046-2.304L221.124,39.165 c1.698-0.166,3.319-0.433,5.04-0.574c10.198-0.923,20.636-1.355,31.25-1.355c6.804,0,13.466,0.274,20.078,0.674l-159.59,153.053 C106.591,184.557,96.992,177.471,89.606,169.685z M187.438,215.566c-15.571-3.111-30.06-7.32-43.194-12.294 c-0.308-0.117-0.582-0.25-0.881-0.374L311.762,41.22c0.374,0.05,0.766,0.083,1.132,0.141c16.077,2.529,31.149,6.156,45.048,10.613 c0.166,0.05,0.324,0.117,0.49,0.175l-170.42,163.517C187.829,215.632,187.629,215.607,187.438,215.566z M276.179,221.879 c-6.138,0.341-12.452,0.507-18.764,0.507c-12.601,0-24.937-0.648-36.847-1.88L385.074,62.638 c13.49,6.263,25.111,13.607,34.326,21.842c0.715,0.616,1.356,1.265,2.047,1.897L280.579,221.538 C279.098,221.621,277.668,221.813,276.179,221.879z M323.997,216.148l113.577-108.978c3.685,7.245,5.731,14.822,5.731,22.599 C443.305,169.27,393.807,202.848,323.997,216.148z"
            ></path>
            <path
              class="st0"
              d="M377.754,340.414c-13.109,8.01-27.324,14.738-42.578,19.962l17.409,43.551H159.407l17.866-44.716 c-15.637-3.926-30.259-9.465-43.892-16.261L89.24,473.696c-4.018,10.946,0.956,22.874,11.129,26.616 c10.181,3.751,21.692-2.105,25.726-13.042l19.838-49.632h220.126l19.838,49.632c4.035,10.937,15.546,16.792,25.726,13.042 c10.173-3.742,15.147-15.67,11.13-26.616L377.754,340.414z"
            ></path>
          </svg>
          <div class="w-full text-2xl font-semibold">BBQs</div>
        </div></label
      >
    </li>
    <li class="h-full">
      <input
        input-option-checked="oven-section"
        type="checkbox"
        id="oven-option"
        value="oven"
        name="oven_options"
        class="hidden peer"
      />
      <label
        for="oven-option"
        class="inline-flex h-44 items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-[#494f8c] peer-checked:bg-[#494f8c] hover:text-gray-600 peer-checked:text-white hover:bg-gray-50 fill-black peer-checked:fill-white"
      >
        <div
          class="flex flex-col justify-center items-center w-full text-center"
        >
          <svg
          class="mb-1 w-24 h-24"
            viewBox="0 0 50 50"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            ><path
                d="M12 2C10.9 2 10 2.9 10 4L7 4C5.35 4 4 5.35 4 7L4 14L46 14L46 7C46 5.35 44.65 4 43 4L40 4C40 2.9 39.1 2 38 2L32 2C30.9 2 30 2.9 30 4L21 4C21 2.9 20.1 2 19 2L12 2 z M 10 7C11.1 7 12 7.9 12 9C12 10.1 11.1 11 10 11C8.9 11 8 10.1 8 9C8 7.9 8.9 7 10 7 z M 16 7C17.1 7 18 7.9 18 9C18 10.1 17.1 11 16 11C14.9 11 14 10.1 14 9C14 7.9 14.9 7 16 7 z M 22 7C23.1 7 24 7.9 24 9C24 10.1 23.1 11 22 11C20.9 11 20 10.1 20 9C20 7.9 20.9 7 22 7 z M 28 7C29.1 7 30 7.9 30 9C30 10.1 29.1 11 28 11C26.9 11 26 10.1 26 9C26 7.9 26.9 7 28 7 z M 40 7C41.1 7 42 7.9 42 9C42 10.1 41.1 11 40 11C38.9 11 38 10.1 38 9C38 7.9 38.9 7 40 7 z M 4 16L4 42C4 43.65 5.35 45 7 45L9 45L9 46C9 47.1 9.9 48 11 48L14 48C15.1 48 16 47.1 16 46L16 45L34 45L34 46C34 47.1 34.9 48 36 48L39 48C40.1 48 41 47.1 41 46L41 45L43 45C44.65 45 46 43.65 46 42L46 16L4 16 z M 10 21L40 21L40 39L10 39L10 21 z"
              ></path></g
            ></svg
          >
          <div class="w-full text-2xl font-semibold">Oven</div>
        </div>
      </label>
    </li>
    <li class="h-full">
      <input
        input-option-checked="extractor-section"
        type="checkbox"
        id="extractor-option"
        value="extractor"
        name="oven_options"
        class="hidden peer"
      />
      <label
        for="extractor-option"
        class="inline-flex h-44 items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-[#494f8c] peer-checked:bg-[#494f8c] hover:text-gray-600 peer-checked:text-white hover:bg-gray-50 fill-black peer-checked:fill-white"
      >
        <div
          class="flex flex-col justify-center items-center w-full text-center"
        >
        <svg
        class="mb-1 w-24 h-24"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 512.003 512.003"
        > <g><polygon
                points="348.506,167.415 163.493,167.415 11.887,236.943 500.112,236.943 "
              ></polygon>
            </g>
          </g>
          <g>
            <g>
              <rect y="267.359" width="512.003" height="78.324"></rect>
            </g>
          </g>
          <g>
            <g>
              <rect
                x="180.344"
                y="18.604"
                width="151.305"
                height="118.394"></rect>
            </g>
          </g>
          <g>
            <g>
              <path
                d="M152.285,411.41c0-6.791,1.288-9.476,3.419-13.923c2.704-5.641,6.409-13.367,6.409-27.074h-30.417 c0,6.792-1.288,9.476-3.419,13.924c-2.705,5.641-6.409,13.366-6.409,27.073c0,13.707,3.704,21.433,6.409,27.073 c2.132,4.447,3.419,7.132,3.419,13.924c0,6.79-1.288,9.474-3.419,13.92c-2.705,5.64-6.409,13.366-6.409,27.071h30.417 c0-6.79,1.288-9.474,3.419-13.92c2.705-5.64,6.409-13.365,6.409-27.071c0-13.707-3.704-21.433-6.409-27.073 C153.572,420.887,152.285,418.202,152.285,411.41z"
              ></path>
            </g>
          </g>
          <g>
            <g>
              <path
                d="M228.292,411.41c0-6.791,1.288-9.476,3.419-13.923c2.704-5.641,6.409-13.367,6.409-27.074h-30.417 c0,6.792-1.288,9.476-3.419,13.924c-2.705,5.641-6.409,13.366-6.409,27.073c0,13.707,3.704,21.433,6.409,27.073 c2.132,4.447,3.419,7.132,3.419,13.924c0,6.79-1.288,9.474-3.419,13.92c-2.705,5.64-6.409,13.366-6.409,27.071h30.417 c0-6.79,1.288-9.474,3.419-13.92c2.705-5.64,6.409-13.365,6.409-27.071c0-13.707-3.704-21.433-6.409-27.073 C229.579,420.887,228.292,418.202,228.292,411.41z"
              ></path>
            </g>
          </g>
          <g>
            <g>
              <path
                d="M304.297,411.41c0-6.791,1.288-9.476,3.419-13.923c2.705-5.641,6.409-13.367,6.409-27.074h-30.417 c0,6.792-1.288,9.476-3.419,13.924c-2.705,5.641-6.409,13.366-6.409,27.073c0,13.707,3.704,21.433,6.409,27.073 c2.132,4.447,3.419,7.132,3.419,13.924c0,6.79-1.288,9.474-3.419,13.92c-2.705,5.64-6.409,13.366-6.409,27.071h30.417 c0-6.79,1.288-9.474,3.419-13.92c2.705-5.64,6.409-13.365,6.409-27.071c0-13.707-3.704-21.433-6.409-27.073 C305.584,420.887,304.297,418.202,304.297,411.41z"
              ></path>
            </g>
          </g>
          <g>
            <g>
              <path
                d="M380.305,411.41c0-6.791,1.288-9.476,3.419-13.923c2.705-5.641,6.409-13.367,6.409-27.074h-30.417 c0,6.792-1.288,9.476-3.419,13.924c-2.705,5.641-6.409,13.366-6.409,27.073c0,13.707,3.704,21.433,6.409,27.073 c2.132,4.447,3.419,7.132,3.419,13.924c0,6.79-1.288,9.474-3.419,13.92c-2.705,5.64-6.409,13.366-6.409,27.071h30.417 c0-6.79,1.288-9.474,3.419-13.92c2.705-5.64,6.409-13.365,6.409-27.071c0-13.707-3.704-21.433-6.409-27.073 C381.591,420.887,380.305,418.202,380.305,411.41z"
              ></path>
            </g>
          </g>
        </g></svg
      >
          <div class="w-full text-2xl font-semibold">Extractor</div>
        </div>
      </label>
    </li>
    <li class="h-full">
      <input
        input-option-checked="microwave-section"
        type="checkbox"
        id="microwave-option"
        value="microwave"
        name="oven_options"
        class="hidden peer"
      />
      <label
        for="microwave-option"
        class="inline-flex h-44 items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-[#494f8c] peer-checked:bg-[#494f8c] hover:text-gray-600 peer-checked:text-white hover:bg-gray-50 fill-black peer-checked:fill-white"
      >
        <div
          class="flex flex-col justify-center items-center w-full text-center"
        >
        <svg class="mb-1 w-24 h-24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"><path fill-rule="evenodd" d="M0 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm2.546 1.088h6.408c.321 0 .582.26.582.582v4.66c0 .322-.26.582-.582.582H2.546a.582.582 0 0 1-.582-.582V4.67c0-.322.26-.582.582-.582m8.146.748c0-.345.28-.625.625-.625h1.046a.625.625 0 1 1 0 1.25h-1.046a.625.625 0 0 1-.625-.625m.625 1.539a.625.625 0 1 0 0 1.25h1.046a.625.625 0 1 0 0-1.25z" clip-rule="evenodd"/></svg>
          <div class="w-full text-2xl font-semibold">Microwave</div>
        </div>
      </label>
    </li>
    <li class="h-full">
      <input
        input-option-checked="hobs-section"
        type="checkbox"
        id="hobs-option"
        value="Hobs"
        name="oven_options"
        class="hidden peer"
      />
      <label
        for="hobs-option"
        class="inline-flex h-44 items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-[#494f8c] peer-checked:bg-[#494f8c] hover:text-gray-600 peer-checked:text-white hover:bg-gray-50 fill-black peer-checked:fill-white"
      >
        <div
          class="flex flex-col justify-center items-center w-full text-center"
        >
        <svg class="mb-1 w-24 h-24" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 315 315" xmlns:xlink="http://www.w3.org/1999/xlink"><g> <path d="m308,0h-301c-3.866,0-7,3.134-7,7v301c0,3.866 3.134,7 7,7h301c3.866,0 7-3.134 7-7v-301c0-3.866-3.134-7-7-7zm-7,301h-287v-287h287v287z"></path> <circle cx="200.919" cy="282.959" r="8.29"></circle> <circle cx="232.745" cy="282.959" r="8.29"></circle> <circle cx="264.57" cy="282.959" r="8.29"></circle> <path d="m94.313,283.352c35.203,0 63.843-28.64 63.843-63.842 0-35.202-28.64-63.842-63.843-63.842-35.202,0-63.842,28.64-63.842,63.842 0.001,35.202 28.64,63.842 63.842,63.842zm0-113.684c27.483,0 49.843,22.359 49.843,49.842 0,27.482-22.359,49.842-49.843,49.842-27.482,0-49.842-22.359-49.842-49.842 0.001-27.483 22.36-49.842 49.842-49.842z"></path> <path d="m104.648,135.216c28.554,0 51.783-23.23 51.783-51.784 0-28.554-23.229-51.783-51.783-51.783s-51.784,23.229-51.784,51.783c0,28.553 23.231,51.784 51.784,51.784zm0-89.568c20.834,7.10543e-15 37.783,16.949 37.783,37.783 0,20.834-16.949,37.784-37.783,37.784-20.834,0-37.784-16.95-37.784-37.784 2.84217e-14-20.833 16.95-37.783 37.784-37.783z"></path> <path d="m232.745,135.216c28.554,0 51.783-23.23 51.783-51.784 0-28.554-23.229-51.783-51.783-51.783s-51.783,23.229-51.783,51.783c0,28.553 23.229,51.784 51.783,51.784zm0-89.568c20.834,7.10543e-15 37.783,16.949 37.783,37.783 0,20.834-16.949,37.784-37.783,37.784s-37.783-16.95-37.783-37.784c0-20.833 16.949-37.783 37.783-37.783z"></path> <path d="m232.745,262.194c28.554,0 51.783-23.23 51.783-51.783s-23.229-51.784-51.783-51.784-51.783,23.23-51.783,51.784 23.229,51.783 51.783,51.783zm0-89.567c20.834,0 37.783,16.95 37.783,37.784s-16.949,37.783-37.783,37.783-37.783-16.949-37.783-37.783 16.949-37.784 37.783-37.784z"></path> </g> </g></svg>
          <div class="w-full text-2xl font-semibold">Hobs</div>
        </div>
      </label>
    </li>
  </ul>
</div>
<div id="aga_oven-section" class="mt-5 mb-5 border-b-4 border-dotted w-full hidden">
  <h3 class="mb-5 text-2xl font-medium text-gray-900 text-center">Aga oven</h3>
  <div
    class="flex justify-between items-center w-full px-2 md:px-16 mb-6 md:mb-5"
  >
    <label for="two_oven_size-count" class="font-semibold text-lg text-muted"
      >Two oven size <span class="text-red-500">*</span></label
    >
    <div
      class="h-10 w-28 bg-gray-50 flex border border-gray-200 rounded items-center mt-1"
    >
      <button
        type="button"
        id="decrement-button-two_oven_size-count"
        data-input-counter="quantity-two_oven_size-count"
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
        name="two_oven_size_count"
        maxlength="1"
        min="0"
        type="text"
        id="quantity-two_oven_size-count"
        class="px-2 text-center appearance-none outline-none text-gray-800 w-full bg-transparent"
        value="0"
        oninput="this.value = this.value.replace(/[^0-9]/g, '');"
        disabled
        required
      />
      <button
        type="button"
        id="increment-button-two_oven_size-count"
        data-input-counter="quantity-two_oven_size-count"
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
    <label for="four_oven_size-count" class="font-semibold text-lg text-muted"
      > Four oven size <span class="text-red-500">*</span></label
    >
    <div
      class="h-10 w-28 bg-gray-50 flex border border-gray-200 rounded items-center mt-1"
    >
      <button
        type="button"
        id="decrement-button-four_oven_size-count"
        data-input-counter="quantity-four_oven_size-count"
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
        name="four_oven_size_count"
        maxlength="1"
        min="0"
        type="text"
        id="quantity-four_oven_size-count"
        class="px-2 text-center appearance-none outline-none text-gray-800 w-full bg-transparent"
        value="0"
        oninput="this.value = this.value.replace(/[^0-9]/g, '');"
        disabled
        required
      />
      <button
        type="button"
        id="increment-button-four_oven_size-count"
        data-input-counter="quantity-four_oven_size-count"
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
    <label for="side_module-count" class="font-semibold text-lg text-muted"
      > Side module <span class="text-red-500">*</span></label
    >
    <div
      class="h-10 w-28 bg-gray-50 flex border border-gray-200 rounded items-center mt-1"
    >
      <button
        type="button"
        id="decrement-button-side_module-count"
        data-input-counter="quantity-side_module-count"
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
        name="side_module_count"
        maxlength="1"
        min="0"
        type="text"
        id="quantity-side_module-count"
        class="px-2 text-center appearance-none outline-none text-gray-800 w-full bg-transparent"
        value="0"
        oninput="this.value = this.value.replace(/[^0-9]/g, '');"
        disabled
        required
      />
      <button
        type="button"
        id="increment-button-side_module-count"
        data-input-counter="quantity-side_module-count"
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
<div id="bbqs-section" class="mt-5 mb-5 border-b-4 border-dotted w-full hidden">
  <h3 class="mb-5 text-2xl font-medium text-gray-900 text-center">BBQs</h3>
  <div
    class="flex justify-between items-center w-full px-2 md:px-16 mb-6 md:mb-5"
  >
    <label for="small_barbecue-count" class="font-semibold text-lg text-muted"
      >Small barbecue <span class="text-red-500">*</span></label
    >
    <div
      class="h-10 w-28 bg-gray-50 flex border border-gray-200 rounded items-center mt-1"
    >
      <button
        type="button"
        id="decrement-button-small_barbecue-count"
        data-input-counter="quantity-small_barbecue-count"
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
        name="small_barbecue_count"
        maxlength="1"
        min="0"
        type="text"
        id="quantity-small_barbecue-count"
        class="px-2 text-center appearance-none outline-none text-gray-800 w-full bg-transparent"
        value="0"
        oninput="this.value = this.value.replace(/[^0-9]/g, '');"
        disabled
        required
      />
      <button
        type="button"
        id="increment-button-small_barbecue-count"
        data-input-counter="quantity-small_barbecue-count"
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
    <label for="large_barbecue-count" class="font-semibold text-lg text-muted"
      >Large barbecue <span class="text-red-500">*</span></label
    >
    <div
      class="h-10 w-28 bg-gray-50 flex border border-gray-200 rounded items-center mt-1"
    >
      <button
        type="button"
        id="decrement-button-large_barbecue-count"
        data-input-counter="quantity-large_barbecue-count"
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
        name="large_barbecue_count"
        maxlength="1"
        min="0"
        type="text"
        id="quantity-large_barbecue-count"
        class="px-2 text-center appearance-none outline-none text-gray-800 w-full bg-transparent"
        value="0"
        oninput="this.value = this.value.replace(/[^0-9]/g, '');"
        disabled
        required
      />
      <button
        type="button"
        id="increment-button-large_barbecue-count"
        data-input-counter="quantity-large_barbecue-count"
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
<div id="oven-section" class="mt-5 mb-5 border-b-4 border-dotted w-full hidden">
  <h3 class="mb-5 text-2xl font-medium text-gray-900 text-center">Oven</h3>
  <div
    class="flex justify-between items-center w-full px-2 md:px-16 mb-6 md:mb-5"
  >
    <label for="single_oven-count" class="font-semibold text-lg text-muted"
      >Single oven <span class="text-red-500">*</span></label
    >
    <div
      class="h-10 w-28 bg-gray-50 flex border border-gray-200 rounded items-center mt-1"
    >
      <button
        type="button"
        id="decrement-button-single_oven-count"
        data-input-counter="quantity-single_oven-count"
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
        name="single_oven_count"
        maxlength="1"
        min="0"
        type="text"
        id="quantity-single_oven-count"
        class="px-2 text-center appearance-none outline-none text-gray-800 w-full bg-transparent"
        value="0"
        oninput="this.value = this.value.replace(/[^0-9]/g, '');"
        disabled
        required
      />
      <button
        type="button"
        id="increment-button-single_oven-count"
        data-input-counter="quantity-single_oven-count"
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
    <label for="double_oven-count" class="font-semibold text-lg text-muted"
      >Double oven <span class="text-red-500">*</span></label
    >
    <div
      class="h-10 w-28 bg-gray-50 flex border border-gray-200 rounded items-center mt-1"
    >
      <button
        type="button"
        id="decrement-button-double_oven-count"
        data-input-counter="quantity-double_oven-count"
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
        name="double_oven_count"
        maxlength="1"
        min="0"
        type="text"
        id="quantity-double_oven-count"
        class="px-2 text-center appearance-none outline-none text-gray-800 w-full bg-transparent"
        value="0"
        oninput="this.value = this.value.replace(/[^0-9]/g, '');"
        disabled
        required
      />
      <button
        type="button"
        id="increment-button-double_oven-count"
        data-input-counter="quantity-double_oven-count"
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
    <label for="single_wide_oven-count" class="font-semibold text-lg text-muted"
      >Single wide oven <span class="text-red-500">*</span></label
    >
    <div
      class="h-10 w-28 bg-gray-50 flex border border-gray-200 rounded items-center mt-1"
    >
      <button
        type="button"
        id="decrement-button-single_wide_oven-count"
        data-input-counter="quantity-single_wide_oven-count"
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
        name="single_wide_oven_count"
        maxlength="1"
        min="0"
        type="text"
        id="quantity-single_wide_oven-count"
        class="px-2 text-center appearance-none outline-none text-gray-800 w-full bg-transparent"
        value="0"
        oninput="this.value = this.value.replace(/[^0-9]/g, '');"
        disabled
        required
      />
      <button
        type="button"
        id="increment-button-single_wide_oven-count"
        data-input-counter="quantity-single_wide_oven-count"
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
<div id="extractor-section" class="mt-5 mb-5 border-b-4 border-dotted w-full hidden">
  <h3 class="mb-5 text-2xl font-medium text-gray-900 text-center">Extractor</h3>
  <div
  class="flex justify-between items-center w-full px-2 md:px-16 mb-6 md:mb-5"
>
  <label for="extractor-count" class="font-semibold text-lg text-muted"
    >Extractor <span class="text-red-500">*</span></label
  >
  <div
    class="h-10 w-28 bg-gray-50 flex border border-gray-200 rounded items-center mt-1"
  >
    <button
      type="button"
      id="decrement-button-extractor-count"
      data-input-counter="quantity-extractor-count"
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
      name="extractor_count"
      maxlength="1"
      min="0"
      type="text"
      id="quantity-extractor-count"
      class="px-2 text-center appearance-none outline-none text-gray-800 w-full bg-transparent"
      value="0"
      oninput="this.value = this.value.replace(/[^0-9]/g, '');"
      disabled
      required
    />
    <button
      type="button"
      id="increment-button-extractor-count"
      data-input-counter="quantity-extractor-count"
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
  <label for="extractor_double-count" class="font-semibold text-lg text-muted"
    >Extractor (double) <span class="text-red-500">*</span></label
  >
  <div
    class="h-10 w-28 bg-gray-50 flex border border-gray-200 rounded items-center mt-1"
  >
    <button
      type="button"
      id="decrement-button-extractor_double-count"
      data-input-counter="quantity-extractor_double-count"
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
      name="extractor_double_count"
      maxlength="1"
      min="0"
      type="text"
      id="quantity-extractor_double-count"
      class="px-2 text-center appearance-none outline-none text-gray-800 w-full bg-transparent"
      value="0"
      oninput="this.value = this.value.replace(/[^0-9]/g, '');"
      disabled
      required
    />
    <button
      type="button"
      id="increment-button-extractor_double-count"
      data-input-counter="quantity-extractor_double-count"
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
  <label for="range_extractor-count" class="font-semibold text-lg text-muted"
    >Range extractor <span class="text-red-500">*</span></label
  >
  <div
    class="h-10 w-28 bg-gray-50 flex border border-gray-200 rounded items-center mt-1"
  >
    <button
      type="button"
      id="decrement-button-range_extractor-count"
      data-input-counter="quantity-range_extractor-count"
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
      name="range_extractor_count"
      maxlength="1"
      min="0"
      type="text"
      id="quantity-range_extractor-count"
      class="px-2 text-center appearance-none outline-none text-gray-800 w-full bg-transparent"
      value="0"
      oninput="this.value = this.value.replace(/[^0-9]/g, '');"
      disabled
      required
    />
    <button
      type="button"
      id="increment-button-range_extractor-count"
      data-input-counter="quantity-range_extractor-count"
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
<div id="microwave-section" class="mt-5 mb-5 border-b-4 border-dotted w-full hidden">
  <h3 class="mb-5 text-2xl font-medium text-gray-900 text-center">Microwave</h3>
  <div
    class="flex justify-between items-center w-full px-2 md:px-16 mb-6 md:mb-5"
  >
    <label for="microwave_oven-count" class="font-semibold text-lg text-muted"
      >microwave oven<span class="text-red-500">*</span></label
    >
    <div
      class="h-10 w-28 bg-gray-50 flex border border-gray-200 rounded items-center mt-1"
    >
      <button
        type="button"
        id="decrement-button-microwave_oven-count"
        data-input-counter="quantity-microwave_oven-count"
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
        name="microwave_oven_count"
        maxlength="1"
        min="1"
        type="text"
        id="quantity-microwave_oven-count"
        class="px-2 text-center appearance-none outline-none text-gray-800 w-full bg-transparent"
        value="1"
        oninput="this.value = this.value.replace(/[^1-9]/g, '');"
        disabled
        required
      />
      <button
        type="button"
        id="increment-button-microwave_oven-count"
        data-input-counter="quantity-microwave_oven-count"
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
<div id="hobs-section" class="mt-5 mb-5 border-b-4 border-dotted w-full hidden">
  <h3 class="mb-5 text-2xl font-medium text-gray-900 text-center">Hobs</h3>
  <div
  class="flex justify-between items-center w-full px-2 md:px-16 mb-6 md:mb-5"
>
  <label for="gas_hob-count" class="font-semibold text-lg text-muted"
    >Gas hob <span class="text-red-500">*</span></label
  >
  <div
    class="h-10 w-28 bg-gray-50 flex border border-gray-200 rounded items-center mt-1"
  >
    <button
      type="button"
      id="decrement-button-gas_hob-count"
      data-input-counter="quantity-gas_hob-count"
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
      name="gas_hob_count"
      maxlength="1"
      min="0"
      type="text"
      id="quantity-gas_hob-count"
      class="px-2 text-center appearance-none outline-none text-gray-800 w-full bg-transparent"
      value="0"
      oninput="this.value = this.value.replace(/[^0-9]/g, '');"
      disabled
      required
    />
    <button
      type="button"
      id="increment-button-gas_hob-count"
      data-input-counter="quantity-gas_hob-count"
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
  <label for="gas_hob_double-count" class="font-semibold text-lg text-muted"
    >Gas hob (double) <span class="text-red-500">*</span></label
  >
  <div
    class="h-10 w-28 bg-gray-50 flex border border-gray-200 rounded items-center mt-1"
  >
    <button
      type="button"
      id="decrement-button-gas_hob_double-count"
      data-input-counter="quantity-gas_hob_double-count"
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
      name="gas_hob_double_count"
      maxlength="1"
      min="0"
      type="text"
      id="quantity-gas_hob_double-count"
      class="px-2 text-center appearance-none outline-none text-gray-800 w-full bg-transparent"
      value="0"
      oninput="this.value = this.value.replace(/[^0-9]/g, '');"
      disabled
      required
    />
    <button
      type="button"
      id="increment-button-gas_hob_double-count"
      data-input-counter="quantity-gas_hob_double-count"
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
  <label for="ceramic_hob-count" class="font-semibold text-lg text-muted"
    >Ceramic hob <span class="text-red-500">*</span></label
  >
  <div
    class="h-10 w-28 bg-gray-50 flex border border-gray-200 rounded items-center mt-1"
  >
    <button
      type="button"
      id="decrement-button-ceramic_hob-count"
      data-input-counter="quantity-ceramic_hob-count"
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
      name="ceramic_hob_count"
      maxlength="1"
      min="0"
      type="text"
      id="quantity-ceramic_hob-count"
      class="px-2 text-center appearance-none outline-none text-gray-800 w-full bg-transparent"
      value="0"
      oninput="this.value = this.value.replace(/[^0-9]/g, '');"
      disabled
      required
    />
    <button
      type="button"
      id="increment-button-ceramic_hob-count"
      data-input-counter="quantity-ceramic_hob-count"
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
  'Rubbish Removal': `<div class="grid grid-cols-1 md:grid-cols-2 md:px-16 px-2 gap-5">
  <div class="w-full mb-3">
    <label
      class="block tracking-wide text-gray-700 text-base font-bold mb-2"
      for="rubbish_yards"
    >
      Rubbish cubic yards: <span class="text-red-500">*</span>
    </label>
    <input
      class="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-800"
      id="rubbish_yards"
      name="rubbish_yards"
      type="text"
      required
    />
  </div>
  <div class="w-full mb-3">
    <label
      class="block tracking-wide text-gray-700 text-base font-bold mb-2"
      for="rubbish_weight"
    >
      Rubbish weight (kg): <span class="text-red-500">*</span>
    </label>
    <input
      class="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-800"
      id="rubbish_weight"
      name="rubbish_weight"
      type="text"
      required
    />
  </div>
</div>`,
  Gardening: `<div class="flex-row w-full px-2 mt-5 md:px-16 mb-6 md:mb-5">
  <label class="mb-5 text-lg font-medium text-gray-900">
    How often would you like the gardening team to come? <span
      class="text-red-500">*</span
    >
  </label>
  <ul class="grid w-full gap-2 md:gap-4 md:grid-cols-4 mt-4">
    <li class="h-full">
      <input
        type="radio"
        id="once-option"
        name="gardening_frequency"
        value="once"
        class="hidden peer"
        required
      />
      <label
        for="once-option"
        class="inline-flex h-16 items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-[#494f8c] peer-checked:bg-[#494f8c] hover:text-gray-600 peer-checked:text-white hover:bg-gray-50 fill-black peer-checked:fill-white select-none"
      >
        <div class="w-full text-lg font-semibold text-center">Once</div>
      </label>
    </li>
    <li class="h-full">
      <input
        type="radio"
        id="weekly-option"
        name="gardening_frequency"
        value="weekly"
        class="hidden peer"
        required
      />
      <label
        for="weekly-option"
        class="inline-flex h-16 items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-[#494f8c] peer-checked:bg-[#494f8c] hover:text-gray-600 peer-checked:text-white hover:bg-gray-50 fill-black peer-checked:fill-white select-none"
      >
        <div class="w-full text-lg font-semibold text-center">Weekly</div>
      </label>
    </li>
    <li class="h-full">
      <input
        type="radio"
        id="fortnightly-option"
        value="fortnightly"
        name="gardening_frequency"
        class="hidden peer"
      />
      <label
        for="fortnightly-option"
        class="inline-flex h-16 items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-[#494f8c] peer-checked:bg-[#494f8c] hover:text-gray-600 peer-checked:text-white hover:bg-gray-50 fill-black peer-checked:fill-white select-none"
      >
        <div class="w-full text-lg font-semibold text-center">
          Fortnightly
        </div>
      </label>
    </li>
    <li class="h-full">
      <input
        type="radio"
        id="monthly-option"
        value="monthly"
        name="gardening_frequency"
        class="hidden peer"
      />
      <label
        for="monthly-option"
        class="inline-flex h-16 items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-[#494f8c] peer-checked:bg-[#494f8c] hover:text-gray-600 peer-checked:text-white hover:bg-gray-50 fill-black peer-checked:fill-white select-none"
      >
        <div class="w-full text-lg font-semibold text-center">
          Monthly
        </div>
      </label>
    </li>
  </ul>
</div>
<div class="flex-row w-full px-2 mt-5 md:px-16 mb-6 md:mb-5">
  <label class="mb-5 text-lg font-medium text-gray-900 select-none">
    How many hours do you think you need per visit? <span
      class="text-red-500">*</span
    >
  </label>
  <ul class="grid w-full gap-2 md:gap-4 md:grid-cols-3 mt-4">
    <li class="h-full">
      <input
        type="radio"
        id="one-hour-option"
        name="hours_per_visit"
        value="1"
        class="hidden peer"
        required
      />
      <label
        for="one-hour-option"
        class="inline-flex h-16 items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-[#494f8c] peer-checked:bg-[#494f8c] hover:text-gray-600 peer-checked:text-white hover:bg-gray-50 fill-black peer-checked:fill-white select-none"
      >
        <div class="w-full text-lg font-semibold text-center">
          1 hour per visit
        </div>
      </label>
    </li>
    <li class="h-full">
      <input
        type="radio"
        id="two-hours-option"
        name="hours_per_visit"
        value="2"
        class="hidden peer"
      />
      <label
        for="two-hours-option"
        class="inline-flex h-16 items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-[#494f8c] peer-checked:bg-[#494f8c] hover:text-gray-600 peer-checked:text-white hover:bg-gray-50 fill-black peer-checked:fill-white select-none"
      >
        <div class="w-full text-lg font-semibold text-center">
          2 hours per visit
        </div>
      </label>
    </li>
    <li class="h-full">
      <input
        type="radio"
        id="three-hours-option"
        name="hours_per_visit"
        value="3"
        class="hidden peer"
      />
      <label
        for="three-hours-option"
        class="inline-flex h-16 items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-[#494f8c] peer-checked:bg-[#494f8c] hover:text-gray-600 peer-checked:text-white hover:bg-gray-50 fill-black peer-checked:fill-white select-none"
      >
        <div class="w-full text-lg font-semibold text-center">
          3 hours per visit
        </div>
      </label>
    </li>
  </ul>
</div>
<div class="flex-row w-full px-2 mt-5 md:px-16 mb-6 md:mb-5">
  <label class="mb-5 text-lg font-medium text-gray-900 select-none">
    How big is your garden? <span class="text-red-500">*</span>
  </label>
  <ul class="grid w-full gap-2 md:gap-4 md:grid-cols-3 mt-4">
    <li class="h-full">
      <input
        type="radio"
        id="up-to-30sqm-option"
        name="garden_size"
        value="up_to_30_sqm"
        class="hidden peer"
        required
      />
      <label
        for="up-to-30sqm-option"
        class="inline-flex h-16 items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-[#494f8c] peer-checked:bg-[#494f8c] hover:text-gray-600 peer-checked:text-white hover:bg-gray-50 fill-black peer-checked:fill-white select-none"
      >
        <div class="w-full text-lg font-semibold text-center">
          Up to 30 sq. m.
        </div>
      </label>
    </li>
    <li class="h-full">
      <input
        type="radio"
        id="up-to-60sqm-option"
        name="garden_size"
        value="up_to_60_sqm"
        class="hidden peer"
      />
      <label
        for="up-to-60sqm-option"
        class="inline-flex h-16 items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-[#494f8c] peer-checked:bg-[#494f8c] hover:text-gray-600 peer-checked:text-white hover:bg-gray-50 fill-black peer-checked:fill-white select-none"
      >
        <div class="w-full text-lg font-semibold text-center">
          Up to 60 sq. m.
        </div>
      </label>
    </li>
    <li class="h-full">
      <input
        type="radio"
        id="over-60sqm-option"
        name="garden_size"
        value="over_60_sqm"
        class="hidden peer"
      />
      <label
        for="over-60sqm-option"
        class="inline-flex h-16 items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-[#494f8c] peer-checked:bg-[#494f8c] hover:text-gray-600 peer-checked:text-white hover:bg-gray-50 fill-black peer-checked:fill-white select-none"
      >
        <div class="w-full text-lg font-semibold text-center">
          Over 60 sq. m.
        </div>
      </label>
    </li>
  </ul>
</div>
<div class="flex-row w-full px-2 mt-5 md:px-16 mb-6 md:mb-5">
  <label class="mb-5 text-lg font-medium text-gray-900 select-none">
    What is the condition of your garden? <span class="text-red-500"
      >*</span
    >
  </label>
  <ul class="grid w-full gap-2 md:gap-4 md:grid-cols-3 mt-4">
    <li class="h-full">
      <input
        type="radio"
        id="well-maintained-option"
        name="garden_condition"
        value="well_maintained"
        class="hidden peer"
        required
      />
      <label
        for="well-maintained-option"
        class="inline-flex h-16 items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-[#494f8c] peer-checked:bg-[#494f8c] hover:text-gray-600 peer-checked:text-white hover:bg-gray-50 fill-black peer-checked:fill-white select-none"
      >
        <div class="w-full text-lg font-semibold text-center">
          Well maintained
        </div>
      </label>
    </li>
    <li class="h-full">
      <input
        type="radio"
        id="tlc-option"
        name="garden_condition"
        value="in_need_of_some_TLC"
        class="hidden peer"
      />
      <label
        for="tlc-option"
        class="inline-flex h-16 items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-[#494f8c] peer-checked:bg-[#494f8c] hover:text-gray-600 peer-checked:text-white hover:bg-gray-50 fill-black peer-checked:fill-white select-none"
      >
        <div class="w-full text-lg font-semibold text-center">
          In need of some TLC
        </div>
      </label>
    </li>
    <li class="h-full">
      <input
        type="radio"
        id="overgrown-option"
        name="garden_condition"
        value="overgrown"
        class="hidden peer"
      />
      <label
        for="overgrown-option"
        class="inline-flex h-16 items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-[#494f8c] peer-checked:bg-[#494f8c] hover:text-gray-600 peer-checked:text-white hover:bg-gray-50 fill-black peer-checked:fill-white select-none"
      >
        <div class="w-full text-lg font-semibold text-center">
          Overgrown
        </div>
      </label>
    </li>
  </ul>
</div>
<div class="flex-row w-full px-2 mt-8 md:px-16 mb-6 md:mb-5">
  <label class="mb-5 text-lg font-medium text-gray-900">
    Pick your priorities for the service:
  </label>
  <ul class="grid w-full gap-2 md:gap-3 md:grid-cols-3 mt-4">
    <li class="h-full">
      <input
        type="checkbox"
        id="weeding-option"
        value="weeding"
        name="service_priorities"
        class="hidden peer"
      />
      <label
        for="weeding-option"
        class="inline-flex h-16 items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-[#494f8c] peer-checked:bg-[#494f8c] hover:text-gray-600 peer-checked:text-white hover:bg-gray-50 fill-black peer-checked:fill-white"
      >
        <div class="w-full text-lg font-semibold text-center">
          Weeding
        </div>
      </label>
    </li>
    <li class="h-full">
      <input
        type="checkbox"
        id="mowing-option"
        value="mowing"
        name="service_priorities"
        class="hidden peer"
      />
      <label
        for="mowing-option"
        class="inline-flex h-16 items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-[#494f8c] peer-checked:bg-[#494f8c] hover:text-gray-600 peer-checked:text-white hover:bg-gray-50 fill-black peer-checked:fill-white"
      >
        <div class="w-full text-lg font-semibold text-center">Mowing</div>
      </label>
    </li>
    <li class="h-full">
      <input
        type="checkbox"
        id="leaf-collection-option"
        value="leaf_collection"
        name="service_priorities"
        class="hidden peer"
      />
      <label
        for="leaf-collection-option"
        class="inline-flex h-16 items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-[#494f8c] peer-checked:bg-[#494f8c] hover:text-gray-600 peer-checked:text-white hover:bg-gray-50 fill-black peer-checked:fill-white"
      >
        <div class="w-full text-lg font-semibold text-center">
          Leaf collection
        </div>
      </label>
    </li>
    <li class="h-full">
      <input
        type="checkbox"
        id="pruning-option"
        value="pruning"
        name="service_priorities"
        class="hidden peer"
      />
      <label
        for="pruning-option"
        class="inline-flex h-16 items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-[#494f8c] peer-checked:bg-[#494f8c] hover:text-gray-600 peer-checked:text-white hover:bg-gray-50 fill-black peer-checked:fill-white"
      >
        <div class="w-full text-lg font-semibold text-center">
          Pruning
        </div>
      </label>
    </li>
    <li class="h-full">
      <input
        type="checkbox"
        id="edging-option"
        value="edging"
        name="service_priorities"
        class="hidden peer"
      />
      <label
        for="edging-option"
        class="inline-flex h-16 items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-[#494f8c] peer-checked:bg-[#494f8c] hover:text-gray-600 peer-checked:text-white hover:bg-gray-50 fill-black peer-checked:fill-white"
      >
        <div class="w-full text-lg font-semibold text-center">Edging</div>
      </label>
    </li>
    <li class="h-full">
      <input
        type="checkbox"
        id="re-establish-beds-option"
        value="re_establish_beds"
        name="service_priorities"
        class="hidden peer"
      />
      <label
        for="re-establish-beds-option"
        class="inline-flex h-16 items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-[#494f8c] peer-checked:bg-[#494f8c] hover:text-gray-600 peer-checked:text-white hover:bg-gray-50 fill-black peer-checked:fill-white"
      >
        <div class="w-full text-lg font-semibold text-center">
          Re-establish beds
        </div>
      </label>
    </li>
    <li class="h-full">
      <input
        type="checkbox"
        id="turn-over-beds-option"
        value="turn_over_beds"
        name="service_priorities"
        class="hidden peer"
      />
      <label
        for="turn-over-beds-option"
        class="inline-flex h-16 items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-[#494f8c] peer-checked:bg-[#494f8c] hover:text-gray-600 peer-checked:text-white hover:bg-gray-50 fill-black peer-checked:fill-white"
      >
        <div class="w-full text-lg font-semibold text-center">
          Turn over beds
        </div>
      </label>
    </li>
    <li class="h-full">
      <input
        type="checkbox"
        id="replanting-option"
        value="replanting"
        name="service_priorities"
        class="hidden peer"
      />
      <label
        for="replanting-option"
        class="inline-flex h-16 items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-[#494f8c] peer-checked:bg-[#494f8c] hover:text-gray-600 peer-checked:text-white hover:bg-gray-50 fill-black peer-checked:fill-white"
      >
        <div class="w-full text-lg font-semibold text-center">
          Replanting
        </div>
      </label>
    </li>
    <li class="h-full">
      <input
        type="checkbox"
        id="hedge-cutting-option"
        value="hedge_cutting"
        name="service_priorities"
        class="hidden peer"
      />
      <label
        for="hedge-cutting-option"
        class="inline-flex h-16 items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-[#494f8c] peer-checked:bg-[#494f8c] hover:text-gray-600 peer-checked:text-white hover:bg-gray-50 fill-black peer-checked:fill-white"
      >
        <div class="w-full text-lg font-semibold text-center">
          Hedge cutting
        </div>
      </label>
    </li>
    <li class="h-full">
      <input
        type="checkbox"
        id="bush-reshaping-option"
        value="bush_reshaping"
        name="service_priorities"
        class="hidden peer"
      />
      <label
        for="bush-reshaping-option"
        class="inline-flex h-16 items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-[#494f8c] peer-checked:bg-[#494f8c] hover:text-gray-600 peer-checked:text-white hover:bg-gray-50 fill-black peer-checked:fill-white"
      >
        <div class="w-full text-lg font-semibold text-center">
          Bush reshaping
        </div>
      </label>
    </li>
  </ul>
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
  'Maintenance service': `<div class="mb-6 px-2 md:px-16">
  <label
    for="service_details"
    class="block tracking-wide text-gray-700 text-base font-bold mb-2"
    >Maintenance Service Details: <span class="text-red-500">*</span
    ></label
  >
  <textarea
    id="service_details"
    name="service_details"
    class="form-textarea w-full bg-gray-100 border border-gray-300 rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
    rows="6"
    placeholder="Please provide details about the maintenance service you need"
    required
  ></textarea>
</div>`,
};
