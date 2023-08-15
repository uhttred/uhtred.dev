<template>
  <div class="row-c">
    <section class="row bdr-b-1 pb-24">
      <!-- left container -->
      <div class="col-span-full xl:col-span-7">
        <h1 class="text-34 text-color-1 font-bold mt-6 lg:mt-14">
          {{ $t('t022') }}
        </h1>
        <!-- iframe content -->
        <div class="bg-2 rounded bdr-2 mt-12 w-full min-h-[34rem] flex flex-col items-center overflow-hidden">
          <!-- <p class="text-14/8 text-color-2 text-center max-w-[30rem] my-8">
            Please fill out the form below so I can get to know you
            and understand a little about your business.
            I will contact you shortly.
          </p> -->
          <div class="w-full">
            <!-- <iframe
              src="https://app.hellobonsai.com/f/0f37df25fad231c?embed=true"
              frameborder="0"
              width="100%"
              height="100%"
              style="border: none; min-height: 600px" 
            /> -->
            <iframe
              :src="
                locale === 'pt'
                  ? $config.public.formsUrl.ptStartProject
                  : $config.public.formsUrl.enStartProject
              "
              frameborder="0"
              width="100%"
              height="100%"
              class="dark:invert-[90%]"
              style="border: none; min-height: 600px"
            />
          </div>
        </div>
      </div>
      <!-- sidebar container -->
      <aside class="col-span-full xl:col-span-5 xl:col-start-8 xl:block">
        <!-- sticky content -->
        <div class="xl:sticky top-[90px] xl:pl-6 mt-12 xl:mt-[12rem]">
          <h3 class="text-color-1 text-26/10 font-bold">
            {{ $t('t023') }}
          </h3>
          <p class="text-16/8 text-color-3 font-normal mt-8">
            {{ $t('t024') }}
            <a
              :href="
                locale === 'pt'
                  ? $config.public.formsUrl.ptRequestService
                  : $config.public.formsUrl.enRequestService
              "
              target="_blank"
              class="text-color-1 underline"
            >
              {{ $t('t025') }}</a>.
          </p>
          <p class="text-16/8 text-color-3 font-normal mt-5.5">
            {{ $t('t026') }}
            <a
              :href="$config.public.formsUrl.shceduleConsult"
              target="_blank"
              class="text-color-1 underline"
            >
            {{ $t('t027') }}</a>.
          </p>
          <div class="mt-12">
            <img
              src="~/assets/image/uhtred-pofile.png"
              alt="uhtred profile image"
              class="w-[66px] h-[66px] bdr-p rounded-md"
            >
          </div>
        </div>
      </aside>
    </section>
    <!--  -->
    <PageSectionKnowMoreCases class="py-16 lg:py-24" />
  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n()
</script>
