function getButtonHTML(qnNumber, question) {
    return `<button
                    class="group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                    type="button"
                    data-te-collapse-init
                    data-te-collapse-collapsed
                    data-te-target="#qn-${qnNumber}"
                    aria-expanded="false"
                    aria-controls="collapseOne">
                    ${qnNumber} ${question}
                <span
                        class="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
          
          <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-6 w-6">
            <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
          </svg>
        </span>
            </button>`
}

window.addEventListener('load', () => {

    const root = document.createElement('div');
    questions.forEach((q) => {
        const { qnNumber, question, answers } = q;

        const wrapper = document.createElement('div');
        wrapper.className = 'border border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800'

        const qnWrapperElement = document.createElement('h2');
        const qnElement = document.createElement('div');

        qnWrapperElement.className = "mb-0 accordion-header"
        qnElement.innerHTML = getButtonHTML(qnNumber, question)

        qnWrapperElement.appendChild(qnElement);

        const answerWrapperElement = document.createElement('div');
        answerWrapperElement.classList.add('!visible');
        answerWrapperElement.classList.add('hidden');
        answerWrapperElement.classList.add('px-5');
        answerWrapperElement.classList.add('py-4');
        answerWrapperElement.dataset['teCollapseItem'] = true;
        // answerWrapperElement.dataset['teCollapseShow'] = true;
        answerWrapperElement.id = `qn-${qnNumber}`;

        const answerAnimationWrapperElement = document.createElement('div');
        answerAnimationWrapperElement.classList.add('px-5');
        answerAnimationWrapperElement.classList.add('py-4');
        answers.forEach((a) => {
            const answerElement = document.createElement('div');
            answerElement.innerText = a;
            answerAnimationWrapperElement.appendChild(answerElement)
        });

        answerWrapperElement.appendChild(answerAnimationWrapperElement);

        wrapper.appendChild(qnWrapperElement)
        wrapper.appendChild(answerWrapperElement);

        root.appendChild(wrapper);

    });

    document.body.appendChild(root);

});

