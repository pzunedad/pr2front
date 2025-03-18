import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { Diccionario, getWord } from "../../utils/utils.ts";
import Meanings from "../../components/meanings.tsx";
import Phonetics from "../../components/phonetics.tsx";


export const handler:Handlers = {
    GET: async(_req:Request, ctx:FreshContext<unknown, Diccionario>) => {
        const { word } = ctx.params
        const words:Diccionario = await getWord(word)
        return ctx.render(words)
    }
}

const Page = (props:PageProps<Diccionario>) => {
    const { data } = props;

    return (
        <div>
            <h1>{data.word}</h1>
            <Phonetics {...data} />
            <Meanings {...data} />
        </div>
    );
}

export default Page