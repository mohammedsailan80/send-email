import emailjs from 'emailjs-com'
// npm i emailjs-com --save

//npm install bootstrap

export default function ContactUs() {
    const sendEmail = (e) => {
      e.preventDefault();
                    //  Server id          YOUR_TEMPLATE_ID                Your user id
      emailjs.sendForm('server_mohmmedsailan80', 'template_3ox0ekk', e.target, 'user_p9jg57IPNxVHdczTjLcZv')
        .then((result) => {
            console.log(result.text);
            e.target.reset();
        }, (error) => {
            console.log(error.text);
        });
    };

    return (

        <div>
            
            <section class="mb-4 container">

               
                <h2 class="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
                
                <p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
                    a matter of hours to help you.</p>

                <div class="row">

                   
                    <div class="col-md-12 mb-md-0 mb-5">
                        <form onSubmit={sendEmail}>

                            
                            <div class="row">

                                
                                <div class="col-md-6">
                                    <div class="md-form mb-0">
                                        <label for="name" class="">Your name</label>
                                        <input type="text" id="name" name="userName" class="form-control"/>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="md-form mb-0">
                                        <label for="email" class="">Your email</label>
                                        <input type="text" id="email" name="userEmail" class="form-control"/>
                                    </div>
                                </div>

                            </div>
                            <div class="row ">
                                <div class="col-md-12 mt-3">
                                    <div class="md-form mb-0">
                                        <label for="subject" class="">Subject</label>
                                        <input type="text" id="subject" name="title" class="form-control"/>
                                    </div>
                                </div>
                            </div>
                            <div class="row">

                                <div class="col-md-12 mt-3">

                                    <div class="md-form">
                                        <label for="message">Your message</label>
                                        <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                                    </div>

                                </div>
                            </div>
                            <div class="text-center text-md-start rounded-5  mt-3">
                                <button class="btn btn-primary px-5" type="submit"><strong>Send</strong></button>
                            </div>
                        </form>
                    </div>
                </div>

            </section>
        </div>
    )
}