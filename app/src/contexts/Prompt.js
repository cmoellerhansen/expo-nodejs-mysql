import { createContext, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { BottomSheet, Dialog, Text } from '@rneui/themed';

import ButtonContainer from '../components/ButtonContainer';

export const PromptContext = createContext();

export const PromptProvider = ({ children }) => {
    const [bottomSheetVisible, setBottomSheetVisible] = useState(false);
    const [dialogVisible, setDialogVisible] = useState(false);
    const [bottomSheetContent, setBottomSheetContent] = useState({});
    const [dialogContent, setDialogContent] = useState({});

    const showBottomSheet = (content) => {
        setBottomSheetContent(content);
        setBottomSheetVisible(true);
    }

    const hideBottomSheet = () => {
        setBottomSheetVisible(false);
    }

    const showDialog = (content) => {
        setDialogContent(content);
        setDialogVisible(true);
    }

    const hideDialog = () => {
        setDialogVisible(false);
    }

    const BottomSheetComponent = () => (
        <BottomSheet
            isVisible={bottomSheetVisible}
            onBackdropPress={hideBottomSheet}
        >
            <View>
                <Text h2>{bottomSheetContent?.title}</Text>
                <Text>{bottomSheetContent?.message}</Text>
                <ButtonContainer buttons={bottomSheetContent?.buttons} />
            </View>
        </BottomSheet>
    );

    const DialogComponent = () => (
        <Dialog
            isVisible={dialogVisible}
            onBackdropPress={hideDialog}
        >
            <View>
                <Text h2>{dialogContent?.title}</Text>
                <Text>{dialogContent?.message}</Text>
                <ButtonContainer buttons={dialogContent?.buttons} />
            </View>
        </Dialog>
    );

    const value = {
        showBottomSheet,
        hideBottomSheet,
        showDialog,
        hideDialog,
        BottomSheet: BottomSheetComponent,
        Dialog: DialogComponent
    };

    return (
        <PromptContext.Provider value={value}>            
            {children}
        </PromptContext.Provider>
    );
};

export default PromptProvider;