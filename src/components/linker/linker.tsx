import {attemptToFindObjectById} from "../../utils/object";

/** Note for dev:
 * Linker should take in an id string, and a fallback string.
 * It should attempt to find an object by that ID, and generate a link to that object.
 * Otherwise, will use the fallback as plain text
 */

export const Linker = ({
                           id,
                           fallback
                       }: {
    id: string,
    fallback: string,
}) => {
    const l = attemptToFindObjectById(id);
    return l ? <a href={l.url}>{l.text}</a> : <span>{fallback}</span>;
}
