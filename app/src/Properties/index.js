import { react } from 'react'
import Home from '../navbar';
import '../css/index1.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Index() {
    return (
        <div>
            <Home/>
            
            <h1 style={{textAlign: "center"}}>FINANCE GOAL</h1>
            <h1>FINANCE PROBLEM</h1>
            <li>Lack of income/job loss</li>
            <li>Unexpected expenses</li>
            <li>Too much debt</li>
            <li>Need for financial independence</li>
            <li>Overspeeding or lack of budget</li>
            <li>Bad credit</li>
            <li>Lack of savings</li>
            <li>Encouraging young investers</li>
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">

                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="title">FINANCE PROBLEM</div>
                        managers to make sensible investment and financing decisions. Acknowledges that financial theory
                        teaches that investment and financing decisions should be based on cash flow and risk. <br />
                    </div>
                    <div className="carousel-item">
                        <div className="title">Lack of income/job loss</div>
                        Sees the objective of teaching financial management to be to help managers and potential
                    </div>
                    <div className="carousel-item">
                        <div className="title">Unexpected expenses</div>
                        Assets include the value of securities and funds held in checking or savings accounts, retirement
                        account balances,trading accounts, and real estates.Liabilities include any debts the individual may
                        have including personal loans, credit cards, student loans, unpaid taxes,and mortgages <br />
                    </div>
                    <div className="carousel-item">
                        <div className="title">Too much debt</div>
                        The power of compound interest shows how you can really put your money to work andwatch it grow.When
                        you earn interest on savings, that interest on itself and this amount is compound monthly. The higher
                        the interest, the more your money grows. <br />
                    </div>
                    <div className="carousel-item">
                        <div className="title">Need for financial independence</div>
                        The two main types of income are passive and active. Passive income includes money earned from interest,
                        dividends, and rental property. Active income includes hourly wages, salaries, and commissions. Real
                        estate investors can generate both active and passive income, depending on the investment strategy used.
                        <br />
                    </div>
                    <div className="carousel-item">
                        <div className="title">Overspeeding or lack of budget</div>
                        Popular thumb rules for managing your salary like the 50-30-20 rule of budgeting suggest that you can
                        allocate 50% of your paycheck (210,000) to essentials like rent, and food; 30% (26,000) for saving &
                        investing in assets like mutual funds, stocks, digital gold, and more: 20% (24,000) to wants like dinner
                        dates. <br />
                    </div>
                    <div className="carousel-item">
                        <div className="title">Bad credit</div>
                        Anyone under the age of 18 (minor) can invest in Mutual Funds, with the help ofparents/legal guardians
                        until the age of 18. The minor must be the sole account holderrepresented by the parent/guardian. <br />
                    </div>
                    <div className="carousel-item">
                        <div className="title">Encouraging young investers</div>
                        Unlike gambling, trading has no ultimate win or loss. Companies compete with others to innovate their
                        products and provide better services, thus leading their stock prices to rise. This, in turn, leads the
                        stockholders of that firm to earn greater profits. Hence, trading is not gambling <br />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only"></span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only"></span>
                </a>
            </div>
            </div>

            );

}
            export default Index;