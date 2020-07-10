import numpy as np
from tensorflow import keras
from tensorflow.keras import layers
import tensorflow as tf
import numpy as np
import pylab as plt
import glob
import skvideo.io as sk
sample_file = "/Users/mingliang_liu/desktop/sea_surface_height_anomaly_2048.mp4"

#使用ConvLSTM2Dlayer来预测厄尔尼诺现象
def train_network(model,file_path):
    videodata = sk.vreader(
        fname=file_path, num_frames=25*32)
    data = []
    counter=0
    for item in videodata:
        data.append(tf.constant(item))
        if(len(data) == 2):
            x = tf.stack(data[0:len(data)-1])
            target = tf.stack(data[1:])
            x = tf.stack([x])
            target = tf.stack([target])
            data = []
            model.fit(x=x, y=target, shuffle=False)
            model.save('el_nino.h5')
            break

def predict_from_data(model,data,save_file_path):
    result = model.predict(data)
    plt.imshow(result[0][0])
    plt.savefig(save_file_path)


seq = keras.Sequential(
    [
        keras.Input(
            shape=(None, 1024, 2048, 3)
        ),
        layers.ConvLSTM2D(
            filters=40, kernel_size=(3, 3), padding="same", return_sequences=True
        ),
        layers.BatchNormalization(),
        layers.ConvLSTM2D(
            filters=40, kernel_size=(3, 3), padding="same", return_sequences=True
        ),
        layers.BatchNormalization(),
        layers.ConvLSTM2D(
            filters=40, kernel_size=(3, 3), padding="same", return_sequences=True
        ),
        layers.BatchNormalization(),
        layers.ConvLSTM2D(
            filters=40, kernel_size=(3, 3), padding="same", return_sequences=True
        ),
        layers.BatchNormalization(),
        layers.Conv3D(
            filters=3, kernel_size=(3, 3, 3), activation="sigmoid", padding="same"
        ),
    ]
)

seq.compile(loss="binary_crossentropy", optimizer="Adam")


def main():
    train_network(seq,sample_file)


if __name__ == "__main__":
    main()
