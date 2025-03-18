import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { Diccionario, getWord } from "../../utils/utils.ts";
import Fonetica from "../../components/phonetics.tsx";
import Significados from "../../components/meanings.tsx";


export const handler:Handlers = {
    GET: async(_req:Request, ctx:FreshContext<unknown, Diccionario>) => {
        const { word } = ctx.params
        const diccionario:Diccionario = await getWord(word)
        return ctx.render(diccionario)
    }
}
