
import { useState } from "react";
import { Footer } from "../../components/Fianzas/Landing/Footer";
import { Header } from "../../components/Fianzas/Landing/Header";
import { Submenu } from "../../components/Fianzas/Landing/Submenu";
import './css/FianzasCotizacion.css';
import { RangeSlider } from "../../components/Fianzas/Landing/RangeSlider";
import { formatLocalCurrency } from "../../utils/CurrencyFormatter";


export const FianzasCotizacion = () => {
    
    async function onSubmit() {
        alert('Hola!')
    }

    const [valuesAmt] = useState([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,40,50,100])
    const [minAmt] = useState(0);
    const [maxAmt] = useState(valuesAmt.length - 1);
    const [positionAmt, setPositionAmt] = useState(0);
    const [amount, setAmount] = useState(valuesAmt[0]);

    function onUpdateAmt(e:any) {
        setPositionAmt(e.target.value);
        setAmount(valuesAmt[e.target.value]);
    }

    const [valuesUpfront] = useState([0,10,15,20,25,30,35,40,45,50,55,60])
    const [minUpfront] = useState(0);
    const [maxUpfront] = useState(valuesUpfront.length - 1);
    const [positionUpfront, setPositionUpfront] = useState(0);
    const [upfront, setUpfront] = useState(valuesUpfront[0]);

    function onUpdateUpfront(e:any) {
        setPositionUpfront(e.target.value);
        setUpfront(valuesUpfront[e.target.value]);
    }

    const [valuesAccomplish] = useState([0,10,20,60])
    const [minAccomplish] = useState(0);
    const [maxAccomplish] = useState(valuesAccomplish.length - 1);
    const [positionAccomplish, setPositionAccomplish] = useState(0);
    const [accomplish, setAccomplish] = useState(valuesAccomplish[0]);

    function onUpdateAccomplish(e:any) {
        setPositionAccomplish(e.target.value);
        setAccomplish(valuesAccomplish[e.target.value]);
    }

    const [valuesTerm] = useState([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,40,50])
    const [minTerm] = useState(0);
    const [maxTerm] = useState(valuesTerm.length - 1);
    const [positionTerm, setPositionTerm] = useState(0);
    const [term, setTerm] = useState(valuesTerm[0]);

    function onUpdateTerm(e:any) {
        setPositionTerm(e.target.value);
        setTerm(valuesTerm[e.target.value]);
    }


    return (
        <>
            <Header />
            <Submenu />
            <section>
                
                <div className="fianzas-quote">
                    <div className="container">

                        <div className="range-selection">
                            <div className="label">
                                <p>Monto del Contrato <b>{amount} MDP</b></p>
                            </div>
                            <RangeSlider min={minAmt} max={maxAmt} value={positionAmt} onUpdateHandler={onUpdateAmt} step={1} />                     
                        </div>

                        <div className="range-selection">
                            <div className="label">
                                <p>Anticipo <b>{upfront} %</b></p>
                            </div>
                            <RangeSlider min={minUpfront} max={maxUpfront} value={positionUpfront} onUpdateHandler={onUpdateUpfront} step={1} />                     
                        </div>

                        <div className="range-selection">
                            <div className="label">
                                <p>Cumplimiento <b>{accomplish} %</b></p>
                            </div>
                            <RangeSlider min={minAccomplish} max={maxAccomplish} value={positionAccomplish} onUpdateHandler={onUpdateAccomplish} step={1} />                     
                        </div>

                        <input type="checkbox" id='vicios-ocultos-checkbox'></input>
                        <label htmlFor="vicios-ocultos-checkbox">Con vicios ocultos</label>

                        <div className="range-selection">
                            <div className="label">
                                <p>Plazo de Ejecución de Obra en Meses <b>{term} Meses</b></p>
                            </div>
                            <RangeSlider min={minTerm} max={maxTerm} value={positionTerm} onUpdateHandler={onUpdateTerm} step={1} />                     
                        </div>

                    </div>
                

                    
                    <div className="table-title">
                        <h1>Cotizacion</h1>
                        <p>Monto del Contrato: <b>{`${formatLocalCurrency(amount*1000000, "$","","")}`}</b></p>
                    </div>
                    <table>
                        <tr>
                            <th className="th-left">Concepto</th>
                            <th className="th-mid">Anticipo</th>
                            <th className="th-right">Cumplimiento</th>
                        </tr>
                        <tr>
                            <td data-cell="full"><b>Monto Fianza</b>    </td>
                            <td data-cell="limited">{formatLocalCurrency(amount*1000000*(upfront/100), "$","","")}</td>
                            <td data-cell="civil">{formatLocalCurrency(amount*1000000*(accomplish/100), "$","","")}</td>
                        </tr>
                        <tr>
                            <td data-cell="full">Prima Neta</td>
                            <td data-cell="limited">$3,600.00</td>
                            <td data-cell="civil">$3,400.00</td>                            
                        </tr>
                        <tr>
                            <td data-cell="full">Derechos</td>
                            <td data-cell="limited">$126.00</td>
                            <td data-cell="civil">$119.00</td>
                        </tr>
                        <tr>
                            <td data-cell="full">Gastos Exp</td>
                            <td data-cell="limited">$2,300.00</td>
                            <td data-cell="civil">$2,300.00</td>
                        </tr>
                        <tr>
                            <td data-cell="full">Subtotal</td>
                            <td data-cell="limited">$6,026.00</td>
                            <td data-cell="civil">$5,819.00</td>
                        </tr>
                        <tr>
                            <td data-cell="full" className="td-left">IVA</td>
                            <td data-cell="limited">$964.16</td>
                            <td data-cell="civil" className="td-right">$931.04</td>
                        </tr>
                        <tr>
                            <td data-cell="full" className="td-left"><b>Total</b></td>
                            <td data-cell="limited"><b>$6,990.16</b></td>
                            <td data-cell="civil" className="td-right"><b>$6,750.04</b></td>
                        </tr>

                    </table>

                    {/* <h2>Cotiza tu fianza</h2>
                    <p>Cillum ullamco elit in aliquip nulla quis. Anim eiusmod anim esse sint Lorem id eiusmod proident eu voluptate id Lorem. Labore nisi voluptate in eu deserunt veniam minim elit sit exercitation exercitation eiusmod.</p>

                    <div className="container">

                    <form onSubmit={onSubmit}>
                        <div className="row">
                            <div className="col-25">
                                <label htmlFor="contractAmt">Monto del Contrato *</label>
                            </div>
                            <div className="col-75">
                            <input type="text" id="contractAmt" name="contract-amount" placeholder="Ingrese una cantidad..." />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-25">
                            <label htmlFor="lname">Last Name</label>
                            </div>
                            <div className="col-75">
                            <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-25">
                            <label htmlFor="country">Country</label>
                            </div>
                            <div className="col-75">
                            <select id="country" name="country">
                                <option value="australia">Australia</option>
                                <option value="canada">Canada</option>
                                <option value="usa">USA</option>
                            </select>
                            </div>
                        </div>
                        <div className="row">
                            <input type="submit" value="Submit"/>
                        </div>
                    </form>
                    </div>
               */}
                </div>
            </section>
            {/* <Footer /> */}
        </>
    );
}