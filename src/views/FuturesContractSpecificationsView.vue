<template>
  <div class="fcs">
    <h1>This is an FCS page</h1>
  </div>
</template>

<style>
.article .img-container {
  background-color: #fff;
  margin: 20px 0;
  min-width: 50%;
  max-width: 920px;
}

.article-video {
  margin: 35px 0;
  width: 100%;
  height: 521px;
}

.article-info-data {
  margin-bottom: 35px;
  display: flex;
  align-items: center;
}

.article-info+.img-container {
  margin-top: 20px;
}

.article-info-item:not(:first-of-type) {
  margin-left: auto;
}

.article-info-item b {
  font-size: 26px;
  font-weight: 400;
}

.article-info-item a {
  color: inherit;
}

.article-date {
  display: inline-block;
}

.table-container {
  overflow: auto;
  margin: 40px 0;
  width: 102%;
}

.table-container td,
.table-container th {
  border-left: 1px solid #d9d9d9;
  border-bottom: 1px solid #d9d9d9;
  padding: 9px;
  font-size: 18px;
  color: var(--black);
}

.table-container td:first-of-type,
.table-container th:first-of-type {
  border-left: 0;
}

.table-container th {
  font-weight: 700;
}

.table-container tr:last-of-type td,
.table-container tr:last-of-type th {
  border-bottom: 0;
}

.article li,
.article .list li,
.article ul {
  margin: 15px 0;
  color: var(--black);
  font-size: 18px;
}

p.article-tip-name {
  font-size: 26px;
  font-weight: 500;
  margin-top: 0;
}

.article-tip {
  display: flex;
  margin: 35px 0;
}

.article-tip-img {
  margin-right: 15px;
  min-width: 42px;
  height: 42px;
  background-image: url(./src/assets/img/en/icons/question-mark.svg);
  background-position: center;
  background-size: contain;
}

.article-tip-img img {
  display: none;
}

p.article-tip-text {
  margin-bottom: 0;
}

.article-img img.article-item-card-icon {
  position: absolute;
  width: 14px;
  height: 14px;
  bottom: 17px;
  right: 17px;
  min-width: unset;
  top: unset;
  left: unset;
  transform: unset;
}

.article-item-card-badge {
  font-size: 14px;
  z-index: 1;
  position: absolute;
  color: #fff;
  background-color: transparent;
  top: 15px;
  left: 15px;
  padding: 3px 12px;
  border: 1px solid white;
}

.article-item-card-name {
  font-size: 26px;
  font-weight: 500;
  color: var(--black);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  text-align: center;
}

.article-item-card-dark .article-item-card-name {
  color: #fff;
}

.article-img a {
  font-size: 0;
  position: relative;
  overflow: hidden;
  width: 300px;
  height: 200px;
  display: block;
  text-decoration: none;
  background-color: var(--text-lightgrey);
}

.article-img img {
  height: 100%;
  max-width: unset;
  object-fit: cover;
  object-position: left;
  width: 100%;
  transition: .3s;
}

.article-item-card:hover .article-img-thumb {
  transform: scale(1.05);
}

.article .text+.btn-big,
.article p+.btn-big {
  margin: 35px 0;
}

.article a {
  overflow-wrap: break-word;
}

@media (max-width: 768px) {
  .article-info-item b {
        font-size: 18px;
    }

    .article-book-row {
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;
    }
}

@media (max-width: 480px) {
  .article-video {
        height: 47vw;
    }

    .article .img-container {
        margin: 15px 0;
    }
}

@media (max-width: 420px) {


  .article-book-block {
        padding: 20px;
    }
}
</style>
