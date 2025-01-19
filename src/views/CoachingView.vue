<template>
  <div class="coaching">
    <h1>This is an coaching page</h1>
  </div>
</template>

<style>
@media (min-width: 768px) {
  .cot1-intro-sect {
    position: relative;
  }

  .cot1-intro-sect:before {
    content: '';
    width: 100vw;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgb(0 0 0 / 0.3);
    display: block;
    position: absolute;
  }

  .cot1-intro-sect .intro-left {
    position: relative;
    z-index: 2;
  }
}

@media (max-width: 576px) {
  .cot1-intro-sect {
    background-position: -530px 0;
  }
}

@media (max-width: 420px) {
  .cot-scheme {
    padding: 10px 10px 30px;
    display: flex;
    flex-direction: column;
  }

  .cot-scheme-row {
    flex-grow: 1;
  }

  .cot-scheme-number:nth-child(4):before {
    height: 403px;
  }

  .cot-scheme-number:nth-child(12):after {
    bottom: 17.5px;
  }
}
</style>
