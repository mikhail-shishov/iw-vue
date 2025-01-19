<script lang="ts">
import "@/assets/css/pages/specification.css";
</script>

<template>
  <main class="content">
    <section class="text-sect">
      <div class="container-full">
        <h2 class="h1">Futures-Kontrakt-Spezifikationen</h2>
        <div class="tab-group" data-tab-group="spec">
          <div class="tab is-active" data-tab="Indices" id="Indices">
            <div class="table-spec-container">
              <table class="table-spec" cellpadding="0" cellspacing="0">
                <tbody>
                  <tr class="table-spec-head">
                    <th class="table-spec-th" rowspan="2">Futures Contract</th>
                    <th class="table-spec-th" rowspan="2">Exchange</th>
                    <th class="table-spec-th" colspan="4">Symbols</th>
                    <th class="table-spec-th" rowspan="2">Trading Hours</th>
                    <th class="table-spec-th" rowspan="2">Delivery Months</th>
                    <th class="table-spec-th" rowspan="2">Contract Size</th>
                    <th class="table-spec-th" rowspan="2">Minimum Tick Value</th>
                    <th class="table-spec-th" rowspan="2">Point Value</th>
                    <th class="table-spec-th" rowspan="2">Margin Requirements</th>
                    <th class="table-spec-th" rowspan="2">Detailed description</th>
                  </tr>

                  <tr class="table-spec-symbol">
                    <th class="table-spec-th table-spec-th-symbol"><a href="https://www.tradenavigator.com"
                        target="_blank" rel="nofollow noreferrer">TN<span>Trade Navigator</span></a></th>
                    <th class="table-spec-th table-spec-th-symbol"><a href="https://www.tradestation.com"
                        target="_blank" rel="nofollow noreferrer">TS<span>TradeStation</span></a></th>
                    <th class="table-spec-th table-spec-th-symbol"><a href="https://www.tradingview.com" target="_blank"
                        rel="nofollow noreferrer">IB<span>Interactive Brokers</span></a></th>
                    <th class="table-spec-th table-spec-th-symbol"><a href="https://www.interactivebrokers.com"
                        target="_blank" rel="nofollow noreferrer">TV<span>TradingView</span></a></th>
                  </tr>
                  <tr class="table-spec-row">
                    <td>S&amp;P 500 E-Mini (ES)</td>
                    <td>GBLX</td>
                    <td>ES</td>
                    <td>ES</td>
                    <td>ES</td>
                    <td>ES</td>
                    <td>5:00p.m. - 4:00p.m. (Sun-Fri) (Settles 3:00p.m.) CST</td>
                    <td>H, M, U, Z</td>
                    <td>$50 times Index</td>
                    <td>$12.50</td>
                    <td>$50.00</td>
                    <td>$12,320.00</td>
                    <td><a
                        href="http://www.cmegroup.com/trading/equity-index/us-index/e-mini-sandp500_contract_specifications.html"
                        rel="nofollow noopener" target="_blank">www.cmegroup.com</a></td>
                  </tr>
                  <tr class="table-spec-row">
                    <td>S&amp;P 500 Micro E-mini (MES)</td>
                    <td>CME</td>
                    <td>MES</td>
                    <td>MES</td>
                    <td>MES</td>
                    <td>MES</td>
                    <td>5:00p.m. - 4:00p.m. (Sun-Fri) (Settles 3:00p.m.) CST</td>
                    <td>H, M, U, Z</td>
                    <td>$5 times Index</td>
                    <td>$1.25</td>
                    <td>$5.00</td>
                    <td>$1,232.00</td>
                    <td><a
                        href="https://www.cmegroup.com/trading/equity-index/us-index/micro-e-mini-sandp-500_contract_specifications.html"
                        rel="nofollow noopener" target="_blank">www.cmegroup.com</a></td>
                  </tr>
                  <tr class="table-spec-row">
                    <td>Nasdaq 100 E-Mini (NQ)</td>
                    <td>GBLX</td>
                    <td>NQ</td>
                    <td>NQ</td>
                    <td>NQ</td>
                    <td>NQ</td>
                    <td>5:00p.m. - 4:00p.m. (Sun-Fri) (Settles 3:00p.m.) CST</td>
                    <td>H, M, U, Z</td>
                    <td>$20 times Index</td>
                    <td>$5.00</td>
                    <td>$20.00</td>
                    <td>$18,480.00</td>
                    <td><a
                        href="http://www.cmegroup.com/trading/equity-index/us-index/e-mini-nasdaq-100_contract_specifications.html"
                        rel="nofollow noopener" target="_blank">www.cmegroup.com</a></td>
                  </tr>
                  <tr class="table-spec-row">
                    <td>Nasdaq 100 Micro E-mini (MNQ)</td>
                    <td>CME</td>
                    <td>MNQ</td>
                    <td>MNQ</td>
                    <td>MNQ</td>
                    <td>MNQ</td>
                    <td>5:00p.m. - 4:00p.m. (Sun-Fri) (Settles 3:00p.m.) CST</td>
                    <td>H, M, U, Z</td>
                    <td>$2 times Index</td>
                    <td>$0.50</td>
                    <td>$2.00</td>
                    <td>$1,848.00</td>
                    <td><a
                        href="https://www.cmegroup.com/trading/equity-index/us-index/micro-e-mini-nasdaq-100_contract_specifications.html"
                        rel="nofollow noopener" target="_blank">www.cmegroup.com</a></td>
                  </tr>
                  <tr class="table-spec-row">
                    <td>Dow Futures E-Mini (YM)</td>
                    <td>CBOTM</td>
                    <td>YM</td>
                    <td>YM</td>
                    <td>YM</td>
                    <td>YM</td>
                    <td>5:00p.m. - 4:00p.m. (Sun-Fri) CST (Settles 3:00p.m.) CST</td>
                    <td>H, M, U, Z</td>
                    <td>$5 times Index</td>
                    <td>$5.00</td>
                    <td>$5.00</td>
                    <td>$8,800.00</td>
                    <td><a
                        href="http://www.cmegroup.com/trading/equity-index/us-index/e-mini-dow_contract_specifications.html"
                        rel="nofollow noopener" target="_blank">www.cmegroup.com</a></td>
                  </tr>
                  <tr class="table-spec-row">
                    <td>Dow Micro E-mini (MYM)</td>
                    <td>CME</td>
                    <td>MYM</td>
                    <td>MYM</td>
                    <td>MYM</td>
                    <td>MYM</td>
                    <td>5:00p.m. - 4:00p.m. (Sun-Fri) CST (Settles 3:00p.m.) CST</td>
                    <td>H, M, U, Z</td>
                    <td>$0.5 times Index</td>
                    <td>$0.50</td>
                    <td>$0.50</td>
                    <td>$880.00</td>
                    <td><a
                        href="https://www.cmegroup.com/trading/equity-index/us-index/micro-e-mini-dow_contract_specifications.html"
                        rel="nofollow noopener" target="_blank">www.cmegroup.com</a></td>
                  </tr>
                  <tr class="table-spec-row">
                    <td>Russell 2000 E-Mini (RTY)</td>
                    <td>GBLX</td>
                    <td>-</td>
                    <td>-</td>
                    <td>RTY</td>
                    <td>-</td>
                    <td>5:00p.m. - 4:00p.m. (Sun-Fri) (Settles 3:00p.m.) CST</td>
                    <td>H, M, U, Z</td>
                    <td>$50 times Index</td>
                    <td>$5.00</td>
                    <td>$50.00</td>
                    <td>$6,820.00</td>
                    <td><a
                        href="https://www.cmegroup.com/trading/equity-index/us-index/e-mini-russell-2000_contract_specifications.html"
                        rel="nofollow noopener" target="_blank">www.cmegroup.com</a></td>
                  </tr>
                  <tr class="table-spec-row">
                    <td>Russell 2000 Micro E-mini (M2K)</td>
                    <td>CME</td>
                    <td>RTY</td>
                    <td>RTY</td>
                    <td>RTY</td>
                    <td>RTY</td>
                    <td>5:00p.m. - 4:00p.m. (Sun-Fri) (Settles 3:00p.m.) CST</td>
                    <td>H, M, U, Z</td>
                    <td>$5 times Index</td>
                    <td>$0.50</td>
                    <td>$5.00</td>
                    <td>$682.00</td>
                    <td><a
                        href="https://www.cmegroup.com/trading/equity-index/us-index/micro-e-mini-russell-2000_contract_specifications.html"
                        rel="nofollow noopener" target="_blank">www.cmegroup.com</a></td>
                  </tr>
                  <tr class="table-spec-row">
                    <td>CBOE Volatility Index (VIX)</td>
                    <td>CFE</td>
                    <td>VX</td>
                    <td>VX</td>
                    <td>VIX</td>
                    <td>VX</td>
                    <td>5:00p.m. - 3:15p.m. (Sun) and 3:30p.m. - 3:15p.m. (Mon-Thur) (Settles 3:30p.m.) CST</td>
                    <td>ALL MONTHS</td>
                    <td>$1000 times Index</td>
                    <td>$50.00</td>
                    <td>$1,000.00</td>
                    <td>$8,074.00</td>
                    <td><a href="https://www.cboe.com/tradable_products/vix/vix_futures/" rel="nofollow noopener"
                        target="_blank">www.cboe.com</a></td>
                  </tr>
                  <tr class="table-spec-row">
                    <td>DAX (FDX, FDAX)</td>
                    <td>Eurex</td>
                    <td>FDX</td>
                    <td>FDAX</td>
                    <td>FDAX</td>
                    <td>FDAX</td>
                    <td>01:15a.m. - 10:00p.m. (Mon-Fri) CET</td>
                    <td>H, M, U, Z</td>
                    <td>€25 times Index</td>
                    <td>€25.00</td>
                    <td>€25.00</td>
                    <td>€23,380.00</td>
                    <td><a href="https://www.eurex.com/ex-en/markets/idx/dax" rel="nofollow noopener"
                        target="_blank">www.eurex.com</a></td>
                  </tr>
                  <tr class="table-spec-row">
                    <td>DAX E-mini (GMX, FDXM)</td>
                    <td>Eurex</td>
                    <td>GXM</td>
                    <td>FDXM</td>
                    <td>FDXM</td>
                    <td>FDXM</td>
                    <td>01:15a.m. - 10:00p.m. (Mon-Fri) CET</td>
                    <td>H, M, U, Z</td>
                    <td>€5 times Index</td>
                    <td>€5.00</td>
                    <td>€5.00</td>
                    <td>€4,676.00</td>
                    <td><a href="https://www.eurex.com/ex-en/markets/idx/dax" rel="nofollow noopener"
                        target="_blank">www.eurex.com</a></td>
                  </tr>
                  <tr class="table-spec-row">
                    <td>DAX micro (FDXS)</td>
                    <td>Eurex</td>
                    <td>-</td>
                    <td>FDXS</td>
                    <td>FDXS</td>
                    <td>FDXS</td>
                    <td>01:15a.m. - 10:00p.m. (Mon-Fri) CET</td>
                    <td>H, M, U, Z</td>
                    <td>€1 times Index</td>
                    <td>€1.00</td>
                    <td>€1.00</td>
                    <td>€936.00</td>
                    <td><a href="https://www.eurex.com/ex-en/markets/idx/dax" rel="nofollow noopener"
                        target="_blank">www.eurex.com</a></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <p class="text spec-download"><a href="https://insider-week.com/en/futures-spec/?pdf=futures_specifications"
            target="_blank">Download PDF</a></p>
      </div>
    </section>
  </main>
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
