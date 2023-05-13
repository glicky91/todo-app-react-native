import { Modal, Button, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Input } from "react-native-elements";
const ModalEdit = ({ task, showModal, urgency, status }) => {
    <Modal
        animationType='slide'
        transparent={false}
        visible={showModal}
        onRequestClose={() => setShowModal(!showModal)}
    >
        <Input

            leftIcon={{ type: 'font-awesome', name: 'user-o' }}
            leftIconContainerStyle={{ paddingRight: 10 }}
            onChangeText={(name) => setName(name)}
            value={task.name}
        />

        <Picker
            selectedValue={urgency}
            onValueChange={(itemValue) => setUrgency(itemValue)}
        >
            <Picker.Item label='Urgent' value={'urgent'} />
            <Picker.Item label='Not-Urgent' value={'not-urgent'} />
        </Picker>
        <Picker
            selectedValue={status}
            onValueChange={(itemValue) => setStatus(itemValue)}
        >
            <Picker.Item label='not-started' value={'not-started'} />
            <Picker.Item label='in-progress' value={'in-progress'} />
            <Picker.Item label='completed' value={'completed'} />
        </Picker>
        <View style={{ margin: 10 }}>
            <Button
                title='Submit'
                color='#5637DD'
                onPress={() => {
                    handleEditSubmit();
                }}
            />
        </View>
        <View style={{ margin: 10 }}>
            <Button
                onPress={() => {

                    resetForm();
                }}
                color='#808080'
                title='Cancel'
            />
        </View>
    </Modal>
}
export default ModalEdit;