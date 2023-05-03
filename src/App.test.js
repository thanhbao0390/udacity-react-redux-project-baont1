import renderer from 'react-test-renderer';
import { _saveQuestion, _saveQuestionAnswer } from './app/api/_DATA';

import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';

describe('screen login', () => {
    let loginOutput = `<body>
                        <div>
                        <div
                            class="App"
                        >
                            <div
                            class="login-contents"
                            >
                            <label>
                                Choose user to login:
                            </label>
                            <select>
                                <option
                                disabled=""
                                value=""
                                >
                                Move to...
                                </option>
                                <option
                                value="sarahedo"
                                >
                                Sarah Edo
                                </option>
                                <option
                                value="tylermcginnis"
                                >
                                Tyler McGinnis
                                </option>
                                <option
                                value="mtsamis"
                                >
                                Mike Tsamis
                                </option>
                                <option
                                value="zoshikanlu"
                                >
                                Zenobia Oshikanlu
                                </option>
                            </select>
                            </div>
                        </div>
                        </div>
                    </body>`
    it('renders correctly', () => {
        const tree = renderer
            .create(loginOutput)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});

describe('_saveQuestion', () => {
    it('will return formatted question if all data is passed correctly', async () => {
        var question = {
            author: 'sarahedo',
            optionOneText: 'take a Option 1',
            optionTwoText: 'take a Option 2',
        };
        var result = await _saveQuestion(question);
        expect(result.author).toEqual('sarahedo');
        expect(result.optionOne.text).toEqual('take a Option 1');
        expect(result.optionTwo.text).toEqual('take a Option 2');
    });

    it('will return error if data passed is incorrect', async () => {
        var wrongQuestion = {
            optionOne: {
                text: 'take a Option 1',
            }
        };
        await expect(_saveQuestion(wrongQuestion)).rejects.toEqual('Please provide optionOneText, optionTwoText, and author');
    });
})

describe('_saveQuestionAnswer', () => {
    it('will return true if all data is passed correctly', async () => {
        var info = {
            authedUser: 'zoshikanlu',
            qid: '8xf0y6ziyjabvozdd253nd',
            answer: 'optionTwo',
        };
        var result = await _saveQuestionAnswer(info);
        expect(result).toEqual(true);
    });

    it('will return error if data passed is incorrect', async () => {
        var wrongInfo = {
            authedUser: 'zoshikanlu',
            answer: 'optionTwo',
        };
        await expect(_saveQuestionAnswer(wrongInfo)).rejects.toEqual('Please provide authedUser, qid, and answer');
    });
})