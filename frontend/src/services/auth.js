export const usuarioAutorizado = () => localStorage.getItem('user-sejaheroi') !== null;
export function sair () {
    localStorage.removeItem("user-sejaheroi");
};