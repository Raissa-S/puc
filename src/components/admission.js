import React, { Component } from 'react'
import {Link } from 'react-router-dom'
import '../styles/admission.css'

export class courses extends Component {

    render() {
        return (
            <div className='coursesContainer'>
                <div className="imagesHeader">
                     <div>{this.props.title}</div>                 
                </div>

                <div className="courseLinksContainer"> 
                
                    <div className='aELinksContainerMargin'>

                    <h3 >ENTRY REQUIREMENT FOR UNDERGRADUATE PROGRAMME </h3>
                            <div className="ae entryRequirement">
                            
                                <h2>SSSCE Holders</h2>
                                <h5>Six (6) passes including:</h5>
                                <ul className='ulPad'>
                                    <li>Core English</li>
                                    <li>Core Mathematics</li>
                                    <li>and either Integrated Science</li>
                                    <li>or Social Studies</li>
                                    <li>and three (3) Electives in relevant subjects</li>
                                </ul>
                                <h5>Applicants should have an aggregate score of 6 – 24 in the West Africa Examination Council (WAEC) Senior Secondary School Certificate Examinations.</h5>

                            </div>
                            <div className="ae entryRequirement">
                            
                            <h2>WASSSCE Holders</h2>
                                <h5>Six (6) Credits including:</h5>
                                <ul className='ulPad'>
                                    <li>Core English</li>
                                    <li>Core Mathematics</li>
                                    <li>and either Integrated Science or Social Studies</li>
                                    <li>and three (3) Electives in relevant subjects</li>
                                </ul>
                                <h5>Applicants should have an aggregate score of 6 – 36 in the WASSCE as interpreted below:</h5>

                                
                                <div>
                                <table class="table table-bordered">
                                    <thead>
                                        <tr>
                                        <th scope="col">WASSCE</th>
                                        <th scope="col">SSSCE</th>
                                        <th scope="col">GRADE</th>
                                        <th scope="col">INTERPRETATION</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>    
                                        <td>A1</td>
                                        <td>A</td>
                                        <td>1</td>
                                        <td>Excellent</td>
                                        </tr>
                                        <tr>
                                                                           <td>B2</td>
                                        <td>B</td>
                                        <td>2</td>
                                        <td>Very Good</td>
                                        </tr>
                                        <tr>
                                        
                                        <td>C3</td>
                                        <td>C</td>
                                        <td>3</td>
                                        <td>Good</td>
                                        </tr>
                                        <tr>
                                        
                                        <td>C4</td>
                                        <td>D</td>
                                        <td>4</td>
                                        <td>Credit</td>
                                        </tr>
                                        <tr>
                                       
                                        <td>C5</td>
                                        <td></td>
                                        <td>5</td>
                                        <td>Credit</td>
                                        </tr>
                                        <tr>
                                        
                                        <td>C6</td>
                                        <td></td>
                                        <td>6</td>
                                        <td>Credit</td>
                                        </tr>
                                    </tbody>
                                    </table>
                                </div>
                                <h5>Both SSSCE and WASSSCE Holders</h5>
                                <h6>Candidates with a combination of the two grading 
                                    systems shall be treated on a case-by-case basis.</h6>
                            </div>
                            
            
                           
                    </div>
                    <div className='aELinksContainerMargin'>

                    <h3 >ENTRY REQUIREMENT FOR POST-GRADUATE PROGRAMME </h3>
                            <div className="ae entryRequirement">
                            
                                
                                <h5>A candidate seeking admission to the various degree programmes must:</h5>
                                <ul className='ulPad'>
                                    <li>Have obtained a good first degree (at least, a Second Class Lower Division) in an appropriate field of study from a recognized academic institution.</li>
                                    <li>Submit an official transcript of academic record.</li>
                                    <li>Submit a certified copy of a certificate.</li>
                                    <li>Submit, at least two referee’s reports, one of which must be from a former lecturer</li>
                                    <li>Satisfy any additional requirements prescribed by the College. These may include relevant work experience, 
                                        a written entrance examination and/or an interview.</li>
                                </ul>
                            </div>
                            <div>
                                <h5>Special Admissions</h5>

                                <h6>In special cases, an applicant who does not have a first degree but is otherwise adjudged suitable may be admitted into the programme. 
                                    Such an applicant must:</h6>
                            
                                <ul className='ulPad'>
                                    <li>Have special knowledge and considerable experience in his/her area of interest.</li>
                                    <li>Have, at least, GCE ‘O’ Level/SSSCE/WASSCE passes in English Language and Mathematics.</li>
                                    <li>Have a Diploma in the relevant field of study</li>
                                    <li>Be, at least, 35 years of age.</li>
                                </ul>
                            
                               <h6>A candidate who possesses a first degree with a Third Class or Pass may be considered for admission into the programme. Such an applicant will be required to:</h6>

                                <ul className='ulPad'>
                                    <li>Submit a transcript of his/her academic record.</li>
                                    <li>Pass a selection interview</li>
                                </ul>
                            
                            </div>
                           
                            
                            
                            
            
                           
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default courses
