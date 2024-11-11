export default function AppMain(){

    //logica
    const welcome = "Welcome to my React App"

    //logica bonus
    const list_current = "Current Tasks"
    const list_completed = "Completed Tasks"
    
    //markup
    return(

        <main>
            <h1>{welcome}</h1>
            <section>
                <h2>
                    {list_current}
                </h2>
            </section>

            <section>
                <h2>
                    {list_completed}
                </h2>
            </section>
        </main>

    )
}