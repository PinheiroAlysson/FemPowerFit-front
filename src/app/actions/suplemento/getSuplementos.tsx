'use server'

export async function getSuplementos() {
    const resp = await fetch(process.env.API_BASE_URL + "/suplementos", { next: { revalidate: 0 } })
    return await resp.json()
}