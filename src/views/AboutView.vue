<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<style>
.about-team-sect {
  margin-bottom: 80px;
}

.text-row {
  display: flex;
  gap: 54px;
}

.text-row:last-of-type {
  margin-bottom: 0;
}

.text-row-about {
  margin: 80px 0;
  gap: 36px;
  align-items: center;
}

.text-row-about .text-col-img-inner {
  max-width: 380px;
  width: 380px;
}

.text-row-about .img-desc {
  min-height: 105px;
}

.text-col {
  min-width: calc(50% - 27px);
}

.text-col-3 {
  min-width: calc(33% - 22px);
}

.text-col-img-inner {
  min-width: 100%;
}

.text-col .text:last-of-type {
  margin-bottom: 0;
}

.text+.img-container {
  margin-top: 35px;
}

@media (max-width: 1200px) {
  .text-row-about .text-col-img-inner {
    max-width: 100%;
    width: unset;
  }

  .text-row-about .img-desc {
    min-height: unset;
  }
}

@media (max-width: 992px) {
  .text-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 35px;
  }

  .text-block {
    margin: 30px 0 40px;
  }

  .text-row .img-container {
    max-width: 410px;
  }

  .text-row .text-col {
    order: 2;
  }

  .text-row .text-col-img {
    order: 1;
  }

  .text-row-reverse {
    flex-direction: column-reverse;
    margin-top: 20px;
  }

  .champ-row {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 768px) {
  .img-row {
    flex-direction: column;
  }

  .img-row {
    gap: 10px;
  }

  .img-col img {
    min-width: unset;
  }
}
</style>
