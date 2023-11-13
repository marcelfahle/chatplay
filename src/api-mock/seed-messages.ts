// A list of sentences ending with a period.
export const sentences =
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tristique pulvinar ligula, sed dictum diam pellentesque at. Maecenas consequat rutrum fermentum. Maecenas lacinia, risus vel lobortis auctor, erat urna rhoncus tellus, mattis rutrum sapien diam quis urna. Aliquam nec scelerisque enim, non mattis risus. Cras rutrum dictum sollicitudin. Vestibulum aliquam posuere eros. Nullam ut hendrerit purus. Nullam turpis neque, interdum vehicula condimentum vitae, tristique id ante. Nam mauris odio, ullamcorper ut urna feugiat, placerat consequat tellus. Aliquam eleifend ante id fermentum ullamcorper. Cras libero tortor, volutpat sed odio sed, porta facilisis lectus. Vestibulum tristique tortor leo, eu porttitor augue feugiat ut. Ut pharetra vulputate condimentum. Proin porttitor ac urna ut pulvinar. Aliquam finibus imperdiet pretium. Nam massa libero, vulputate at lacinia elementum, dictum ut quam. Nam quis turpis iaculis, ornare enim ac, venenatis dui. Donec aliquet at ligula non fringilla. Nullam non erat sem. Etiam at aliquet mi. In in mollis purus. Donec in egestas ipsum, ac dapibus urna. Ut sollicitudin vehicula consectetur. Pellentesque egestas ex libero. Maecenas sagittis id lorem eu placerat. In varius consequat nulla, consequat varius est lacinia in. Fusce ut porttitor tellus. Morbi porta vulputate libero, dapibus venenatis risus bibendum sit amet. Sed sagittis ex ac odio auctor, vitae dictum libero posuere. Integer id tortor vel elit laoreet euismod auctor et felis. Aenean nulla dui, efficitur vitae nisl vehicula, dignissim interdum enim. Aenean vitae nunc tortor. Donec consectetur rhoncus libero eget posuere. Quisque malesuada vitae libero sit amet tristique. Suspendisse bibendum non nibh a porta. Curabitur in maximus quam. Nullam vitae magna placerat, gravida odio vel, viverra urna. Duis placerat dui sit amet eros ullamcorper, ac fermentum lectus hendrerit. Etiam ut ultricies nulla. Pellentesque malesuada, ex sit amet egestas fermentum, lectus orci vehicula nulla, sit amet egestas lorem urna vel odio. Suspendisse sed ipsum non erat bibendum aliquam vitae vitae ligula. Mauris pulvinar massa sed est ultricies, non rutrum nulla condimentum. Phasellus eros lorem, feugiat eget egestas ut, aliquam eu ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`
        .split(/(?<=\.)\s+/);

const numberOfSentences = sentences.length;
const middleIndex = Math.round(sentences.length / 2);

// The messages to mock the initial message history.
export const seedMessages = sentences.slice(0, middleIndex);
// The mock reply messages from the "remote" chat party.
export const followUpMessages = sentences.slice(middleIndex, numberOfSentences);